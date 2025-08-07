import React from 'react';
import { FaLeaf, FaFlask, FaExternalLinkAlt } from 'react-icons/fa';
import { GiWheat, GiHops } from 'react-icons/gi';
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

    const parameters = [
        { value: `~${extract}`, unit: "BLG", label: "Ekstrakt", icon: <GiWheat /> },
        { value: `~${alcohol}`, unit: "%", label: "Alkohol", icon: <FaFlask /> },
        { value: `~${ibu}`, unit: "IBU", label: "Goryczka", icon: <GiHops /> }
    ];

    const ingredients = [
        { title: "Słody", items: malts, icon: <GiWheat />, colorClass: styles.maltColor },
        { title: "Chmiele", items: hops, icon: <GiHops />, colorClass: styles.hopsColor },
        { title: "Drożdże", items: [yeast], icon: <FaFlask />, colorClass: styles.yeastColor },
        ...(adjuncts?.length > 0 ? [{ title: "Dodatki", items: adjuncts, icon: <FaLeaf />, colorClass: styles.adjunctsColor }] : [])
    ];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.batchBadge}>
                        <span className={styles.batchNumber}>#{batchNumber}</span>
                    </div>
                    <h1 className={styles.beerName}>{name}</h1>
                    {styleName && <h2 className={styles.styleName}>{styleName}</h2>}
                    <p className={styles.description}>{description}</p>
                </div>
            </div>

            {/* Parameters Section */}
            <div className={styles.parametersSection}>
                <h2>Parametry</h2>
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
                                <div className={styles.progress}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ingredients Section */}
            <div className={styles.ingredientsWrapper}>
                <div className={styles.ingredientsHeader}>
                    <h2>Surowce</h2>
                </div>

                <div className={styles.ingredientsGrid}>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className={styles.ingredientCard}>
                            <div className={styles.ingredientHeader}>
                                <div className={`${styles.ingredientIcon} ${ingredient.colorClass}`}>
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
            </div>

            {/* Recipe Link */}
            {brewFatherLink && (
                <div className={styles.recipeSection}>
                    <div className={styles.recipeCard}>
                        <div className={styles.recipeInfo}>
                            <h3>Pełna receptura</h3>
                            <p>Zobacz szczegóły w Brewfather</p>
                        </div>
                        <a
                            href={brewFatherLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.recipeButton}
                        >
                            <span>Otwórz</span>
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}