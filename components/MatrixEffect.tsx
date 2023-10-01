import React, { useEffect, useState } from 'react';

type Character = null | {
    char: string;
    highlight?: boolean;
    fadeCount?: number;
}

const maxFadeCount = 8;

const MatrixEffect = () => {
    const [rows, setRows] = useState([]);



    useEffect(() => {
        const interval = setInterval(() => {
            // @ts-ignore
            setRows((prevRows) => {
                const newRow: Character[] = generateRandomRow();
                // @ts-ignore
                prevRows[prevRows.length - 1]?.forEach((character: Character, index) => {
                    // @ts-ignore
                    if (character.highlight) {
                        // @ts-ignore
                        newRow[index].fadeCount = maxFadeCount;
                        // @ts-ignore
                    } else if (character.fadeCount && character.fadeCount > 0) {
                        // @ts-ignore
                        newRow[index].fadeCount = character.fadeCount - 1;
                    }
                    // @ts-ignore
                    if (!newRow[index].highlight && !newRow[index].fadeCount) {
                        newRow[index] = character;
                    }
                });

                const newRows = [...prevRows, newRow];
                return newRows.length > 15 ? newRows.slice(1) : newRows;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const generateRandomRow = () => {
        const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$<>="\'&/';
        const rowLength = 19;
        const availablePrices = ['1', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
        let price = availablePrices[Math.floor(Math.random() * availablePrices.length)];
        let followPrice = false;
        const row = Array.from(Array(rowLength).keys()).map(() => {
            let character = null;
            if (followPrice) {
                if (price.length === 0) {
                    followPrice = false;
                    price = availablePrices[Math.floor(Math.random() * availablePrices.length)];
                    let char = getRandomChar(charSet);
                    if (char === '$') {
                        followPrice = true;
                    };
                    character = {
                        char,
                        highlight: followPrice,
                    };
                } else {
                    character = {
                        char: price.charAt(0),
                        highlight: true,
                    };
                    price = price.substring(1);
                }
            } else {
                let char = getRandomChar(charSet);
                if (char === '$') {
                    followPrice = true;
                };
                character = {
                    char,
                    highlight: followPrice,
                };
            }

            return character;
        });
        return row;
    };

    // @ts-ignore
    const getRandomChar = (charSet) => {
        return charSet.charAt(Math.floor(Math.random() * charSet.length));
    };

    const getCharacterClass = (character: Character) => {
        if (character?.highlight) {
            return 'font-extrabold !text-purple-600';
        }
        else if (character?.fadeCount && character?.fadeCount > 0) {
            return 'font-extrabold';
        } else {
            return 'opacity-0';
        }
    };

    const getCharacterStyle = (character: Character) => {
        if (!character?.highlight && character?.fadeCount && character?.fadeCount > 0) {
            if (character.fadeCount === 1) {
                return {
                    opacity: 0,
                }
            }
            return {
                opacity: character.fadeCount / (maxFadeCount * 4),
            };
        }
    };


    return (
        <div>
            {rows.map((row, rowIndex) => (
                <div className="flex" key={rowIndex}>
                    {
                        // @ts-ignore
                        row.map((character: Character, characterIndex) => (
                            <div
                                key={characterIndex}
                                className={`text-gray-500 dark:text-gray-400 text-base w-5 ml-1 ${getCharacterClass(character)}`}
                                style={getCharacterStyle(character)}
                            >
                                {character?.char}
                            </div>
                        ))
                    }
                </div>
            ))
            }
        </div >
    );
};

export default MatrixEffect;
