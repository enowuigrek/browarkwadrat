import React from 'react';
import { FaLeaf, FaFlask, FaExternalLinkAlt } from 'react-icons/fa';
import { GiWheat, GiHops } from 'react-icons/gi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './BeerDescription.module.scss';

export function BeerDescription({ beer }) {
    const {
        batchNumber,
        name,
        styleName,
        description,
        malts,
        hops,
        yeast,
        adjuncts,
        extract,
        alcohol,
        ibu,
        brewFatherLink
    } = beer;

    // Scroll animation refs
    const [paramsRef, paramsVisible] = useScrollAnimation({ threshold: 0.2 });
    const [ingredientsRef, ingredientsVisible] = useScrollAnimation({ threshold: 0.2 });
    const [recipeRef, recipeVisible] = useScrollAnimation({ threshold: 0.3 });

    // Max values for progress bar scaling
    const MAX_BLG = 30;
    const MAX_ALCOHOL = 15;
    const MAX_IBU = 100;

    const parameters = [
        { value: `~${extract}`, unit: "BLG", label: "Ekstrakt", icon: <GiWheat />, progress: Math.min((extract / MAX_BLG) * 100, 100) },
        { value: `~${alcohol}`, unit: "%", label: "Alkohol", icon: <FaFlask />, progress: Math.min((alcohol / MAX_ALCOHOL) * 100, 100) },
        { value: `~${ibu}`, unit: "IBU", label: "Goryczka", icon: <GiHops />, progress: Math.min((ibu / MAX_IBU) * 100, 100) }
    ];

    const ingredients = [
        { title: "Slody", items: malts, icon: <GiWheat /> },
        { title: "Chmiele", items: hops, icon: <GiHops /> },
        { title: "Drozdze", items: [yeast], icon: <FaFlask /> },
        ...(adjuncts?.length > 0 ? [{ title: "Dodatki", items: adjuncts, icon: <FaLeaf /> }] : [])
    ];

    return (
        <div className={styles.container}>
            {/* Logo */}
            <img
                src="/logo-cale.svg"
                alt="Browar Kwadrat"
                className={styles.logo}
            />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.beerName}>{name}</h1>
                    <div className={styles.styleRow}>
                        {styleName && (
                            <h2 className={styles.styleName}>
                                <span className={styles.styleText}>{styleName}</span>
                            </h2>
                        )}
                        <span className={styles.batchTag}>#{batchNumber}</span>
                    </div>
                    <p className={styles.description}>{description}</p>
                </div>
            </section>

            {/* Parameters Section */}
            <section
                ref={paramsRef}
                className={`${styles.parametersSection} ${paramsVisible ? styles.visible : ''}`}
            >
                <div className={styles.sectionHeader}>
                    <div className={styles.headerLine}></div>
                    <h2>Parametry</h2>
                    <div className={styles.headerLine}></div>
                </div>
                <div className={styles.parametersGrid}>
                    {parameters.map((param, index) => (
                        <div key={index} className={styles.parameterCard}>
                            <div className={styles.parameterHeader}>
                                <div className={styles.parameterIcon}>
                                    {param.icon}
                                </div>
                                <div className={styles.parameterValue}>
                                    <div className={styles.value}>
                                        {param.value}<span className={styles.unit}>{param.unit}</span>
                                    </div>
                                    <div className={styles.label}>{param.label}</div>
                                </div>
                            </div>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progress}
                                    style={{ '--progress-width': `${param.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ingredients Section */}
            <section
                ref={ingredientsRef}
                className={`${styles.ingredientsSection} ${ingredientsVisible ? styles.visible : ''}`}
            >
                <div className={styles.sectionHeader}>
                    <div className={styles.headerLine}></div>
                    <h2>Surowce</h2>
                    <div className={styles.headerLine}></div>
                </div>

                <div className={styles.ingredientsGrid}>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className={styles.ingredientCard}>
                            <div className={styles.ingredientHeader}>
                                <div className={styles.ingredientIcon}>
                                    {ingredient.icon}
                                </div>
                                <h3>{ingredient.title}</h3>
                            </div>
                            <div className={styles.ingredientList}>
                                {ingredient.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className={styles.ingredientItem}>
                                        <div className={styles.bullet}></div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recipe Link */}
            {brewFatherLink && (
                <section
                    ref={recipeRef}
                    className={`${styles.recipeSection} ${recipeVisible ? styles.visible : ''}`}
                >
                    <div className={styles.recipeCard}>
                        <div className={styles.recipeInfo}>
                            <h3>Pelna receptura</h3>
                            <p>Zobacz szczegoly w Brewfather</p>
                        </div>
                        <a
                            href={brewFatherLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.recipeButton}
                        >
                            <span>Otworz</span>
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </section>
            )}
        </div>
    );
}
