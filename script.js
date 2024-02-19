function showShloks() {
    const problem = document.getElementById("problem").value;
    const shloksDiv = document.getElementById("shloks");
    shloksDiv.innerHTML = "";
    if (problem) {
        const shloks = {
            anger: [
                {
                    text: `"Listen to BhagvadGita"`,
                    solutionLink: "https://www.bhagavad-gita.org/"
                },
                {
                    text:"Chapter 2/ Shloka 56",
                    solutionLink: "https://vedabase.io/en/library/bg/2/56/"
                },
                {
                    text: "Chapter 2/ Shloka 62",
                    solutionLink: "https://vedabase.io/en/library/bg/2/62/"
                },
                {
                    text: "Chapter 2/ Shloka 63",
                    solutionLink: "https://vedabase.io/en/library/bg/2/63/"
                },
                {
                    text: "Chapter 5/ Shloka 26",
                    solutionLink: "https://vedabase.io/en/library/bg/5/26/"
                },
                {
                    text: "Chapter 16/ Shloka 1, 2 & 3",
                    solutionLink: "https://vedabase.io/en/library/bg/16/1-3/"
                },
                {
                    text: "Chapter 16/ Shloka 21",
                    solutionLink: "https://vedabase.io/en/library/bg/16/21/"
                }
            ],
            confusion: [
                {
                    text: `"Listen to Bhagvad Gita" `,
                    solutionLink: "https://www.bhagavad-gita.org/"
                },
                {
                    text:"Chapter 2/ Shloka 7",
                    solutionLink: "https://vedabase.io/en/library/bg/2/7/"
                },
                {
                    text: "Chapter 3/ Shloka 2",
                    solutionLink: "https://vedabase.io/en/library/bg/3/2/"
                },
                {
                    text: "Chapter 18/ Shloka 61",
                    solutionLink: "https://vedabase.io/en/library/bg/18/61/"
                }
            ],
            envy: [
                {
                    text: `"Listen to Bhagvat Gita"`,
                    solutionLink: "https://www.bhagavad-gita.org/"
                },
                {
                    text:"Chapter 12/ Shloka 13 & 14",
                    solutionLink: "https://vedabase.io/en/library/bg/12/13-14/"
                },
                {
                    text: "Chapter 18/ Shloka 71",
                    solutionLink: "https://vedabase.io/en/library/bg/18/71/"
                },
                {
                    text: "Chapter 18/ Shloka 61",
                    solutionLink: "https://vedabase.io/en/library/bg/18/61/"
                }
            ],
            death: [
                {
                    text: `"Listen to Bhagvat Gita" `,
                    solutionLink: "https://www.bhagavad-gita.org/"
                },
                {
                    text: "Chapter 2/ Shloka 13",
                    solutionLink: "https://vedabase.io/en/library/bg/2/13/"
                },
                {
                    text: "Chapter 2/ Shloka 20",
                    solutionLink: "https://vedabase.io/en/library/bg/2/20/"
                },
                {
                    text: "Chapter 2/ Text 22",
                    solutionLink: "https://www.bhagavad-gita.org/Gita/verse-02-22.html"
                },
                {
                    text: "Chapter 2/ Shloka 25",
                    solutionLink: "https://vedabase.io/en/library/bg/2/25/"
                },
                {
                    text: "Chapter 2/ Shloka 27",
                    solutionLink: "https://vedabase.io/en/library/bg/2/27/"
                }
            ],
            depression: [
                {
                    text: `"Listen to Bhagvat Gita" `,
                    solutionLink: "https://www.bhagavad-gita.org/"
                },
                {
                    text: "Chapter 2/ Shloka 3",
                    solutionLink: "https://vedabase.io/en/library/bg/2/3/"
                },
                {
                    text: "Chapter 2/ Shloka 14",
                    solutionLink: "https://vedabase.io/en/library/bg/2/14/"
                },
                {
                    text: "Chapter 2/ Shloka 21",
                    solutionLink: "https://www.bhagavad-gita.org/Gita/verse-02-21.html"
                }
            ],
            discriminated: [
                {
                text: `"Listen to Bhagvat Gita"`,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 18/ Shloka 3",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-05-17.html"
            },
            {
                text: "Chapter 5/ Shloka 19",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-05-18.html"
            },
            {
                text: "Chapter 6/ Shloka 32",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-06-27.html"
            },
            {
                text: "Chapter 9/ Shloka 29",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-09-29.html"
            }
            ],
            fear: [
                {
                text:`"Listen to Bhagvat Gita"`,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 4/ Shloka 10",
                solutionLink: "https://vedabase.io/en/library/bg/4/10/"
            },
            {
                text: "Chapter 11/ Shloka 50",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-11-47.html"
            },
            {
                text: "Chapter 18/ Shloka 30",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-18-29.html"
            },
            {
                text: "Chapter 9/ Shloka 29",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-09-29.html"
            }
            ],
            sinful: [
                {
                text:  `"Listen to Bhagvat Gita"`,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 4/ Shloka 36",
                solutionLink: "https://vedabase.io/en/library/bg/4/36/"
            },
            {
                text: "Chapter 4/ Shloka 37",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-04-37.html"
            },
            {
                text: "Chapter 5/ Shloka 10",
                solutionLink: "https://vedabase.io/en/library/bg/5/10/"
            },
            {
                text: "Chapter 9/ Shloka 30",
                solutionLink: "https://vedabase.io/en/library/bg/9/30/"
            },
            {
                text: "Chapter 10/ Shloka 3",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-10-03.html"
            }
            ,
            {
                text: "Chapter 14/ Shloka 6",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-14-06.html"
            },
            {
                text: "Chapter 18/ Shloka 66",
                solutionLink: "https://vedabase.io/en/library/bg/18/66/"
            }
            ],
            greed: [
                {
                text:  `"Listen to Bhagvat Gita"`,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 14/ Shloka 17",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-14-17.html"
            },
            {
                text: "Chapter 16/ Shloka 21",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-16-16.html"
            },
            {
                text: "Chapter 17/ Shloka 25",
                solutionLink: "https://vedabase.io/en/library/bg/17/25/"
            }
            ],
            laziness: [
                {
                text:  `"Listen to Bhagvat Gita"`,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 3/ Shloka 8",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-03-08.html"
            },
            {
                text: "Chapter 3/ Shloka 20",
                solutionLink: "https://vedabase.io/en/library/bg/3/20/"
            },
            {
                text: "Chapter 6/ Shloka 16",
                solutionLink: "https://vedabase.io/en/library/bg/6/16/"
            },
            {
                text: "Chapter 18/ Shloka 39",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-18-37.html"
            }
            ],
            loneliness: [
                {
                text:  `"Listen to Bhagvat Gita"`,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 6/ Shloka 30",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-06-25.html"
            },
            {
                text: "Chapter 9/ Shloka 29",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-09-29.html"
            },
            {
                text: "Chapter 13/ Shloka 16",
                solutionLink: "https://vedabase.io/en/library/bg/13/16/"
            },
            {
                text: "Chapter 13/ Shloka 18",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-13-12.html"
            }
            ],
            hope: [
                {
                text:  `"Listen to Bhagvat Gita"`,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 4/ Shloka 11",
                solutionLink: "https://vedabase.io/en/library/bg/4/11/"
            },
            {
                text: "Chapter 9/ Shloka 22",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-09-22.html"
            },
            {
                text: "Chapter 9/ Shloka 34",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-09-34.html"
            },
            {
                text: "Chapter 18/ Shloka 66",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-18-62.html"
            },
            {
                text: "Chapter 18/ Shloka 78",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-18-74.html"
            }
            
            ],
            forgiveness: [
                {
                text:  `"Listen to Bhagvat Gita"`,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 11/ Shloka 44",
                solutionLink: "https://vedabase.io/en/library/bg/11/44/"
            },
            {
                text: "Chapter 12/ Shloka 13 & 14",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-12-11.html"
            },
            {
                text: "Chapter 16/ Shloka 1, 2 & 3",
                solutionLink: "https://vedabase.io/en/library/bg/16/1-3/"
            }
            ],
            pride: [
                {
                text:  `"Listen to Bhagvat Gita"`,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 16/ Shloka 4",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-16-02.html"
            },
            {
                text: "Chapter 16/ Shloka 13, 14 & 15",
                solutionLink: "https://vedabase.io/en/library/bg/16/13-15/"
            },
            {
                text: "Chapter 18/ Shloka 26",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-18-25.html"
            },
            {
                text: "Chapter 18/ Shloka 58",
                solutionLink: "https://vedabase.io/en/library/bg/18/58/"
            }
            ],
            peace: [
                {
                text:  `"Listen to Bhagvat Gita"`,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 2/ Shloka 66",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-02-65.html"
            },
            {
                text: "Chapter 2/ Shloka 71",
                solutionLink: "https://vedabase.io/en/library/bg/2/71/"
            },
            {
                text: "Chapter 4/ Shloka 39",
                solutionLink: "https://vedabase.io/en/library/bg/4/39/"
            },
            {
                text: "Chapter 5/ Shloka 29",
                solutionLink: "https://vedabase.io/en/library/bg/5/29/"
            },
            {
                text: "Chapter 8/ Shloka 28",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-08-28.html"
            }
            ],
            temptation: [
                {
                text: `"Listen to Bhagvat Gita" `,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 2/ Shloka 60",
                solutionLink: "https://vedabase.io/en/library/bg/2/60/"
            },
            {
                text: "Chapter 2/ Shloka 61",
                solutionLink: "https://vedabase.io/en/library/bg/2/61/"
            },
            {
                text: "Chapter 2/ Shloka 70",
                solutionLink: "https://vedabase.io/en/library/bg/2/70/"
            },
            {
                text: "Chapter 7/ Shloka 14",
                solutionLink: "https://vedabase.io/en/library/bg/7/14/"
            }
            ],
            demotivated: [
                {
                text: `"Listen to Bhagvat Gita" `, 
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 11/ Shloka 33",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-11-31.html"
            },
            {
                text: "Chapter 18/ Shloka 48",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-18-46.html"
            },
            {
                text: "Chapter 18/ Shloka 78",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-18-74.html"
            }
            ],
            uncontrolled: [
                {
                text: `"Listen to Bhagvat Gita" `,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 6/ Shloka 5",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-06-05.html"
            },
            {
                text: "Chapter 6/ Shloka 6",
                solutionLink: "https://vedabase.io/en/library/bg/6/6/"
            },
            {
                text: "Chapter 6/ Shloka 26",
                solutionLink: "https://vedabase.io/en/library/bg/6/26/"
            },
            {
                text: "Chapter 6/ Shloka 35",
                solutionLink: "https://vedabase.io/en/library/bg/6/35/"
            }
            ],
            lust: [
                {
                text: `"Listen to Bhagvat Gita" `,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 3/ Shloka 37",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-03-41.html"
            },
            {
                text: "Chapter 3/ Shloka 41",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-03-41.html"
            },
            {
                text: "Chapter 3/ Shloka 43",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-03-43.html"
            },
            {
                text: "Chapter 5/ Shloka 22",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-05-21.html"
            },
            {
                text: "Chapter 16/ Shloka 21",
                solutionLink: "https://vedabase.io/en/library/bg/16/21/"
            }
            ],
            forgetfulness: [
                {
                text: `"Listen to Bhagvat Gita" `,
                solutionLink: "https://www.bhagavad-gita.org/"
            },
            {
                text: "Chapter 15/ Shloka 15",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-15-14.html"
            },
            {
                text: "Chapter 18/ Shloka 61",
                solutionLink: "https://www.bhagavad-gita.org/Gita/verse-18-57.html"
            },
            {
                text: "Chapter 2/ Shloka 70",
                solutionLink: "https://vedabase.io/en/library/bg/2/70/"
            },
            {
                text: "Chapter 7/ Shloka 14",
                solutionLink: "https://vedabase.io/en/library/bg/7/14/"
            }
            ],

        };
        const shlokElements = shloks[problem].map(shlok => {
            return `
                <div class="shlok">
                    <p>${shlok.text}</p>
                    <a href="${shlok.solutionLink}" target="_blank">Click here</a>
                </div>
            `;
        });
        
        shloksDiv.innerHTML = shlokElements.join("");
    }
}