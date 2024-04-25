import { CvEvent } from "./models"

export const EVENTS: CvEvent[] = [
    {
        label: 'Passion for mathematics and computer science joint with interest in philosophy, economics, politics and leadership.'
    },
    {
        icon: 'hat.png',
        label: 'Schooling',
        expand: 2,
        autoExpand: false,
        events: [
            {
                icon: 'cambridge-uni.png',
                label: [
                    'Student at ',
                    {
                        label: 'Computer Science',
                        url: 'https://www.cst.cam.ac.uk/'
                    },
                    ', ',
                    {
                        label: 'Trinity College',
                        url: 'https://www.trin.cam.ac.uk/'
                    },
                    ', ',
                    {
                        label: 'University of Cambridge',
                        url: 'https://www.cam.ac.uk/'
                    }
                ],
                start: 2023
            },
            {
                icon: 'habs.jpg',
                label: [
                    {
                        label: 'Haberdashers\' Boys\' School',
                        url: 'https://www.habsboys.org.uk/'
                    },
                    ', United Kingdom'
                ],
                start: 2016,
                end: 2023
            },
            {
                label: [
                    {
                        label: 'Cunningham Hill Junior School',
                        url: 'https://cunninghamhill.herts.sch.uk/'
                    },
                    ', St Albans, United Kingdom'
                ],
                start: 2015,
                end: 2016
            },
            {
                label: [
                    {
                        label: 'New School',
                        url: 'https://newschoolgeorgia.com/'
                    },
                    ', English-language program. Tbilisi, Georgia'
                ],
                start: 2010,
                end: 2015
            }
        ]
    },
    {
        icon: 'coding.png',
        label: 'Coding Competitions',
        autoExpand: false,
        events: [
            {
                icon: 'ioi-32.png',
                label: [
                    {
                        label: 'Participation',
                        url: 'https://stats.ioinformatics.org/people/7641'
                    },
                    ' in the ',
                    {
                        label: 'International Olympiad in Informatics',
                        url: 'https://ioinformatics.org/'
                    },
                    ' IOI',
                ],
                events: [
                    {
                        icon: 'gold.png',
                        label: [
                            {
                                label: 'Gold Medal',
                                url: 'https://stats.ioinformatics.org/results/2023'
                            },
                            ', ',
                            {
                                label: 'IOI 2023 Hungary',
                                url: 'https://ioi2023.hu/'
                            }
                        ],
                        start: 'Aug',
                        end: 'Sep 2023'
                    },
                    {
                        icon: 'silver.png',
                        label: [
                            {
                                label: 'Silver Medal',
                                url: 'https://stats.ioinformatics.org/results/2022'
                            },
                            ', ',
                            {
                                label: 'IOI 2022 Indonesia',
                                url: 'https://ioi2022.id/'
                            }
                        ],
                        start: 'Aug',
                        end: 'Sep 2023'
                    },
                    {
                        icon: 'bronze.png',
                        label: [
                            {
                                label: 'Bronze Medal',
                                url: 'https://stats.ioinformatics.org/results/2021'
                            },
                            ', ',
                            {
                                label: 'IOI 2021 Singapore',
                                url: 'https://ioi2021.sg/'
                            }
                        ],
                        start: 'Aug',
                        end: 'Sep 2023'
                    }
                ]
            },
            {
                icon: 'uk-flag.png',
                label: [
                    'Participation in the ',
                    {
                        label: 'British Olympiad in Informatics',
                        url: 'https://www.olympiad.org.uk/'
                    },
                    ' BIO'
                ],
                events: [
                    {
                        label: 'Highest scorer. Selected for the National Team',
                        date: 2023
                    },
                    {
                        label: 'Highest scorer. Selected for the National Team',
                        date: 2022
                    },
                    {
                        label: 'Highest scorer. Selected for the National Team',
                        date: 2021
                    }
                ]
            },
            {
                icon: 'coding.png',
                label: 'Other Coding Competitions',
                events: [
                    {
                        label: 'Team “treenity” of University of Cambridge, ICPC Europe, Prague',
                        date: 'March 2024'
                    },
                    {
                        icon: 'gold.png',
                        label: [
                            {
                                label: 'Gold Medal',
                                url: 'https://2023.nwerc.eu/main/scoreboard/'
                            },
                            ', 4<sup>th</sup> place, team “treenity”, ',
                            {
                                label: 'Northwestern Europe Regional Contest',
                                url: 'https://nwerc.eu/'
                            }
                        ],
                        date: 2023
                    },
                    {
                        label: [
                            {
                                label: 'Second place',
                                url: 'https://weoi.org/results/2023/'
                            },
                            ', Western-European Olympiad in Informatics ',
                            {
                                label: 'WEOI',
                                url: 'https://weoi.org/'
                            }
                        ],
                        date: 'June 2023'
                    },
                    {
                        label: [
                            {
                                label: 'First place',
                                url: 'https://home.mycloud.com/action/share/c646c71f-5644-4f5b-be55-356a798da484'
                            },
                            ' (special guest status), Winter Olympiad in Informatics of Georgia'
                        ],
                        date: 'Feb 2023'
                    },
                    {
                        icon: 'gold.png',
                        label: [
                            {
                                label: 'Gold Medal',
                                url: 'https://izho.kz/contest/results-izho-2023/'
                            },
                            ' in Computer Science section, ',
                            {
                                label: 'International Zhautykov Olympiad',
                                url: 'https://izho.kz/'
                            },
                            ' (IZhO). Results on ',
                            {
                                label: 'Codeforces',
                                url: 'https://codeforces.com/spectator/ranklist/dd146290dde918feafc288fcb4f377a3'
                            },
                            ' and ',
                            {
                                label: 'IzHO',
                                url: 'https://izho.kz/contest/results-izho-2023/'
                            }
                        ],
                        date: 2023,
                        events: [
                            {
                                label: 'Organized UK’s participation, contacted organizers, arranged logistics'
                            }
                        ],
                        autoExpand: false
                    },
                    {
                        icon: 'bronze.png',
                        label: [
                            {
                                label: 'Bronze Medal',
                                url: 'https://cdn.iati-shu.org/2022/files/Results/Seniors_IATI_2022.pdf'
                            },
                            ', International Autumn Tournament in Informatics (',
                            {
                                label: 'IATI',
                                url: 'https://iati-shu.org/'
                            },
                            ')'
                        ],
                        date: 'Nov 2022',
                        events: [
                            {
                                label: 'Organized UK’s participation, contacted organizers, arranged logistics'
                            }
                        ],
                        autoExpand: false
                    },
                    {
                        icon: '1.png',
                        label: [
                            '1<sup>st</sup> Place at ',
                            {
                                label: 'British Programming Challenge',
                                url: 'https://www.bpc.londonsmp.co.uk/'
                            },
                            ', Lodon'
                        ],
                        date: 2021
                    },
                    {
                        icon: '100.png',
                        label: [
                            {
                                label: 'Full Score',
                                url: 'https://usaco.org/current/data/open21_gold_results.html'
                            },
                            ' in ',
                            {
                                label: 'USACO',
                                url: 'https://usaco.org/'
                            },
                            ' (USA Computing Olympiad), ',
                            {
                                label: 'US Open Gold 2021',
                                url: 'https://usaco.org/index.php?page=open21results'
                            }
                        ],
                        date: 2021
                    },
                    {
                        icon: 'codeforces-32.png',
                        label: [
                            'Competitive Coder with max status of a ',
                            {
                                label: 'Grandmaster',
                                url: 'https://codeforces.com/profile/erekle'
                            },
                            ' (8 May 2023) on ',
                            {
                                label: 'Codeforces',
                                url: 'https://codeforces.com/'
                            },
                            ', the largest online competitive coding platform'
                        ],
                        start: 2019
                    },
                    {
                        label: [
                            {
                                label: 'Top-200 T-shirt',
                                url: 'https://www.facebook.com/codingcompetitions/hacker-cup/2022/round-3/scoreboard?start=189'
                            },
                            ', Facebook Hacker Cup'
                        ],
                        date: 2022
                    },
                    {
                        label: [
                            {
                                label: 'Rank 702',
                                url: 'https://www.facebook.com/codingcompetitions/hacker-cup/2022/round-3/scoreboard?start=189'
                            },
                            ', ',
                            {
                                label: 'Google Code Jam',
                                url: 'https://en.wikipedia.org/wiki/Google_Code_Jam'
                            }
                        ],
                        date: 2021
                    },
                    {
                        label: [
                            'Distinction Award, ',
                            {
                                label: 'Perse Coding Team Challenge',
                                url: 'https://pctc.perse.co.uk/'
                            },
                            ', Round 1'
                        ],
                        date: 2021
                    },
                    {
                        label: [
                            'Distinction Award, ',
                            {
                                label: 'Perse Coding Team Challenge',
                                url: 'https://pctc.perse.co.uk/'
                            },
                            ', Round 1'
                        ],
                        date: 2020
                    }
                ],
                expand: 5
            }
        ]
    },
    {
        icon: 'maths.png',
        label: 'Mathematics Competitions',
        autoExpand: false,
        events: [
            {
                label: [
                    'Scored in ',
                    {
                        label: 'Top 20',
                        url: 'https://bmos.ukmt.org.uk/news/20210219-00-bmo2marked.shtml'
                    },
                    ' in the UK in the ',
                    {
                        label: 'British Mathematical Olympiad',
                        url: 'https://bmos.ukmt.org.uk/'
                    },
                    ' (BMO)'
                ],
                date: 2021
            },
            {
                icon: '1.png',
                label: [
                    {
                        label: '1<sup>st</sup> place',
                        url: 'https://home.mycloud.com/action/share/49663dd0-245e-4bc5-b999-fc5ef35427bd'
                    },
                    ', Juniors, London entry to ',
                    {
                        label: 'Tournament of Towns International Mathematical Olympiad',
                        url: 'https://www.turgor.ru/en/'
                    }
                ],
                date: 'Autumn 2020'
            },
            {
                icon: 'bronze.png',
                label: 'Bronze Medal, British Mathematical Olympiad',
                date: 2022
            },
            {
                icon: 'bronze.png',
                label: 'Bronze Medal, British Mathematical Olympiad, Intermediate (Cayley)',
                date: 2019
            },
            {
                icon: 'gold.png',
                label: 'Gold Medal, Junior Mathematical Olympiad',
                date: 2018
            },
            {
                label: 'School Team member / captain, Hans Woyda Maths Competition',
                start: 2017,
                end: 2023,
                autoExpand: false,
                events: [
                    {
                        label: 'School Team member / captain, Hans Woyda Maths Competition',
                        date: 2023
                    },
                    {
                        label: 'School Team member / captain, Hans Woyda Maths Competition',
                        date: 2022
                    },
                    {
                        label: 'School Team member / captain, Hans Woyda Maths Competition',
                        date: 2021
                    },
                    {
                        label: 'School Team member / captain, Hans Woyda Maths Competition',
                        date: 2020
                    },
                    {
                        label: 'School Team member / captain, Hans Woyda Maths Competition',
                        date: 2019
                    },
                    {
                        label: 'School Team member / captain, Hans Woyda Maths Competition',
                        date: 2018
                    },
                    {
                        label: 'School Team member / captain, Hans Woyda Maths Competition',
                        date: 2017
                    },
                ]
            },
            {
                label: [
                    {
                        label: 'Certificate of Distinction',
                        url: 'https://home.mycloud.com/action/share/fd643ce8-befb-471d-888c-1036f2d925ee'
                    },
                    ', British Mathematical Olympiad, Round 1, ',
                    {
                        label: 'UKMT',
                        url: 'https://ukmt.org.uk/'
                    }
                ],
                date: '2022, 2023',
                autoExpand: false,
                events: [
                    {
                        label: [
                            {
                                type: 'text',
                                label: 'Certificate of Distinction',
                                url: 'https://home.mycloud.com/action/share/fd643ce8-befb-471d-888c-1036f2d925ee'
                            }
                        ],
                        date: 2023
                    },
                    {
                        label: [
                            {
                                label: 'Certificate of Distinction',
                                url: 'https://home.mycloud.com/action/share/fd643ce8-befb-471d-888c-1036f2d925ee'
                            }
                        ],
                        date: 2022
                    }
                ]
            },
            {
                label: [
                    {
                        label: 'Certificate of Distinction',
                        url: 'https://home.mycloud.com/action/share/44790859-db05-4599-b6c9-f039a301aac1'
                    },
                    ', British Mathematical Olympiad, Round 2, ',
                    {
                        label: 'UKMT',
                        url: 'https://ukmt.org.uk/'
                    }
                ],
                date: '2021, 2023',
                autoExpand: false,
                events: [
                    {
                        label: [
                            {
                                type: 'text',
                                label: 'Certificate of Distinction',
                                url: 'https://home.mycloud.com/action/share/44790859-db05-4599-b6c9-f039a301aac1'
                            },
                        ],
                        date: 2023
                    },
                    {
                        label: [
                            {
                                label: 'Certificate of Distinction',
                                url: 'https://home.mycloud.com/action/share/44790859-db05-4599-b6c9-f039a301aac1'
                            },
                        ],
                        date: 2021
                    }
                ]
            },
            {
                label: [
                    {
                        label: 'Gold Certificate / Best in Year',
                        url: 'https://home.mycloud.com/action/share/9f5c285d-d52c-43a9-addb-84d772c5b7e2'
                    },
                    ', Senior Mathmatical Challenge, ',
                    {
                        label: 'UKMT',
                        url: 'https://ukmt.org.uk/'
                    }
                ],
                date: 2020
            },
            {
                label: [
                    {
                        label: '4<sup>th</sup> place',
                        url: 'https://www.habsboys.org.uk/post-article/~board/news/post/habs-in-national-finals-of-uk-team-mathematics-challenge'
                    },
                    ', UK National Finals, ',
                    {
                        label: 'Team Maths Challenge',
                        url: 'https://ukmt.org.uk/team-challenges/team-mathematical-challenge'
                    },
                    ', ',
                    {
                        label: 'UKMT',
                        url: 'https://ukmt.org.uk/'
                    }
                ],
                date: 2019
            },
            {
                label: [
                    {
                        label: 'Second place',
                        url: 'https://home.mycloud.com/action/share/d704522f-f270-4806-9cc1-3f55cca35309'
                    },
                    ', Regional Finals, ',
                    {
                        label: 'Team Maths Challenge',
                        url: 'https://ukmt.org.uk/team-challenges/team-mathematical-challenge'
                    },
                    ', ',
                    {
                        label: 'UKMT',
                        url: 'https://ukmt.org.uk/'
                    }
                ],
                date: 2019
            },
            {
                label: [
                    'Certificate of Distinction, Intermediate Maths Olympiad and Kangaroo, ',
                    {
                        label: 'UKMT',
                        url: 'https://ukmt.org.uk/'
                    }
                ],
                date: 2019
            },
            {
                label: [
                    {
                        label: 'Gold Certificate',
                        url: 'https://home.mycloud.com/action/share/c6df9222-c591-44eb-9337-213e1938d083'
                    },
                    ', Intermediate Mathematical Challenge, ',
                    {
                        label: 'UKMT',
                        url: 'https://ukmt.org.uk/'
                    }
                ],
                date: 2019
            },
            {
                label: [
                    {
                        label: 'Gold Certificate',
                        url: 'https://home.mycloud.com/action/share/e2254163-c6e4-4840-9a1c-2e52f73ec329'
                    },
                    ', Senior Mathematical Challenge, ',
                    {
                        label: 'UKMT',
                        url: 'https://ukmt.org.uk/'
                    }
                ],
                date: 2019
            },
            {
                label: [
                    {
                        label: 'Gold Certificate',
                        url: 'https://home.mycloud.com/action/share/a2a0a952-2e1f-491f-8255-5ab55c22ca8a'
                    },
                    ' / ',
                    {
                        label: 'Best in School',
                        url: 'https://home.mycloud.com/action/share/b50e8e82-2b36-4f00-b1c3-6a318e246c57'
                    },
                    ' / ',
                    {
                        label: 'Best in Year',
                        url: 'https://home.mycloud.com/action/share/e29bd6a3-a424-44b3-862c-2f34b08f0d0e'
                    },
                    ', Junior Mathematical Challenge, ',
                    {
                        label: 'UKMT',
                        url: 'https://ukmt.org.uk/'
                    }
                ],
                date: 2018
            },
            {
                icon: 'bronze.png',
                label: 'Bronze Award, Bonus Round, Primary Mathematics Challenge',
                date: 'Mar 2016'
            },
            {
                icon: 'gold.png',
                label: [
                    'Gold Medal and',
                    {
                        label: 'Gold Award Winner',
                        url: 'https://home.mycloud.com/action/share/8c69660e-544c-441c-996c-6003d2a94292'
                    },
                    ', Primary Mathematics Challenge'
                ],
                date: 'Nov 2015'
            },
            {
                label: [
                    {
                        label: 'Silver Certificate',
                        url: 'https://home.mycloud.com/action/share/22faf3fe-4e04-4b77-b7fc-4c02d59747c8'
                    },
                    ', UK Junior Mathematical Challenge, ',
                    {
                        label: 'UKMT',
                        url: 'https://ukmt.org.uk/'
                    }
                ],
                date: 2015
            },
            {
                label: [
                    {
                        label: '1<sup>st</sup> place',
                        url: 'https://home.mycloud.com/action/share/939d6a97-1387-4eda-8170-f1374bed076f'
                    },
                    ', Autumn-Winter Olympiad in Mathematics, country of Georgia'
                ],
                date: 2013
            },
            {
                label: [
                    {
                        label: '2<sup>nd</sup> place',
                        url: 'https://home.mycloud.com/action/share/fc907369-1869-42a3-ac6e-3c51c7566b9e'
                    },
                    ', King’s Olympiad in Mathematics, ',
                    {
                        label: 'kings.ge',
                        url: 'https://www.kings.ge/'
                    }
                ],
                date: 'May 2013'
            }
        ],
        expand: 5
    },
    {
        icon: 'timer.png',
        label: 'Other Olympiads',
        autoExpand: false,
        events: [
            {
                label: 'Silver Award, British Physics Olympiad Senior Physics Challenge',
                date: 2022
            },
            {
                label: 'Gold Award, British Physics Olympiad Intermediate Physics Challenge',
                date: 2021
            },
            {
                label: 'Winner of Regional, UK Space Design Competition',
                date: 2021
            }
        ]
    },
    {
        icon: 'basketball.png',
        label: 'Other Interests',
        autoExpand: false,
        expand: 5,
        events: [
            {
                icon: 'youtube.png',
                label: [
                    'Youtube channel',
                    {
                        label: '@erekleroinishvili2340',
                        url: 'https://www.youtube.com/@erekleroinishvili2340'
                    },
                    ' discussing mathematics and programming, including solutions to British Informatics Olympiad (BIO)'
                ],
                start: 2015
            },
            {
                icon: 'youtube.png',
                label: [
                    'Created a',
                    {
                        label: 'video on Agile Management',
                        url: 'https://www.youtube.com/watch?v=lpgqcttFeOg'
                    },
                    ' and won competition at Roche Pharmaceuticals family competition and received tickets to the ',
                    {
                        label: 'Royal Institution Christmas Lectures on mathematics with Hannah Fry',
                        url: 'https://youtu.be/TtisQ9yZ2zo?t=352'
                    }
                ],
                start: 2019
            },
            {
                icon: 'airplane.png',
                label: 'Flying radio-controlled aircraft'
            },
            {
                icon: 'cube.png',
                label: 'Rubik’s Cube Speed cubing, average time under 20 seconds'
            },
            {
                icon: 'rowing.png',
                label: 'Rowing, University of Cambridge',
                date: 2024
            },
            {
                icon: 'football.jpg',
                label: 'Football'
            },
            {
                icon: 'basketball.png',
                label: 'Basketball'
            },
            {
                icon: 'chess.png',
                label: 'Chess'
            },
            {
                icon: 'violin.png',
                label: 'Violin'
            },
            {
                icon: 'guitar.png',
                label: 'Guitar'
            }
        ]
    },
    {
        icon: 'various.png',
        label: 'Miscellaneous',
        autoExpand: false,
        expand: 3,
        events: [
            {
                icon: 'hat.png',
                label: [
                    'Awards and Participation at ',
                    {
                        label: 'Haberdashers\' Boys\' School',
                        url: 'https://www.habsboys.org.uk/'
                    }
                ],
                autoExpand: false,
                expand: 5,
                events: [
                    {
                        label: 'Vice-Chair of Computing Society',
                        start: 2022,
                        end: 2023
                    },
                    {
                        label: 'Aske Scholarship - school founder’s titular scholarship for outstanding academic success and contribution to the community',
                        date: 2021
                    },
                    {
                        label: 'Birch Prize - for contributing the most to the HABS community',
                        date: 2022
                    },
                    {
                        icon: 'warplane.jpg',
                        label: 'Warrant Officer, Head of School\'s Royal Air Force Section',
                        date: 2022
                    },
                    {
                        label: [
                            'Winner of ',
                            {
                                label: 'HABS Dragons\' Den',
                                url: 'https://www.habsboys.org.uk/post-article/~board/news/post/habs-welcomed-star-studded-panel-to-elstree-for-dragons-den-event'
                            }
                        ],
                        date: 2020
                    },
                    {
                        label: [
                            'The Duke of Edinburgh\'s (',
                            {
                                label: 'DofE',
                                url: 'https://www.dofe.org/'
                            },
                            ') ',
                            {
                                label: 'Bronze Award',
                                url: 'https://www.dofe.org/wp-content/uploads/2020/07/DofE-Bronze-What-is-the-DofE-presentation-midlength.pdf'
                            }
                        ],
                        date: 2019
                    }
                ]
            }
        ]
    },
]

