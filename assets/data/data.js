/**
 * CONVENTION DE NOMMAGE (TRÈS IMPORTANT) :
 * 
 * 1. SUPPRIMER LES SOUS-TITRES : Ne gardez que le nom de la licence principale.
 *    ❌ Exemple mauvais : "Fullmetal Alchemist: Brotherhood"
 *    ✅ Exemple bon    : "Fullmetal Alchemist"
 * 
 *    ❌ Exemple mauvais : "Sword Art Online: Alicization"
 *    ✅ Exemple bon    : "Sword Art Online"
 * 
 * 2. CARACTÈRES SPÉCIAUX : Gardez-les s'ils font partie du nom d'origine ! 
 *    Le moteur de jeu filtrera automatiquement la ponctuation (les tirets, 
 *    les deux-points, les points d'exclamation, etc.) pour ne garder 
 *    que les lettres à deviner. À l'affichage, les caractères spéciaux 
 *    apparaîtront comme du texte décoratif incliquable.
 *    👍 Vous pouvez tout à fait écrire "Yu-Gi-Oh!" ou "K-On!".
 */
export const ANIME_DATA = [
    {
        "id": "1",
        "names": {
            "original": "One Piece",
            "en": "One Piece",
            "fr": "One Piece"
        },
        "info": {
            "year": "1999",
            "episodes": "1100+",
            "synopsis": {
                "en": "Monkey D. Luffy sets off on an adventure to find the legendary One Piece treasure.",
                "fr": "Luffy part \u00e0 l'aventure pour trouver le l\u00e9gendaire tr\u00e9sor One Piece."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZTIyNzgwZmUtNzgyOS00ZWFjLWJkNTItYjY3ODIxZGQyMDAzXkEyXkFqcGc@._V1_FMjpg_UX1920_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZTExMGZjZGQtYTcwYy00YzU0LThhYjUtZmVmZTdlZTM5NGVlXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOWFjNzE5NjMtZGUyZi00ZDYzLWE5MmUtZWEwNTZmMzhmZTNmXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMDAyYzkxNDAtNjA1Zi00M2M4LWFiMTYtZjg0NmM5MTI2MmI1XkEyXkFqcGc@._V1_FMjpg_UX1920_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg"
    },
    {
        "id": "2",
        "names": {
            "original": "Naruto",
            "en": "Naruto",
            "fr": "Naruto"
        },
        "info": {
            "year": "2007",
            "episodes": "500",
            "synopsis": {
                "en": "Naruto Uzumaki seeks to become the Hokage and save his friend Sasuke.",
                "fr": "Naruto Uzumaki cherche \u00e0 devenir le Hokage et \u00e0 sauver son ami Sasuke."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTUyZmYwZTEtZTc3YS00NmUxLTk5NTUtMmVlM2Q3Mjk5MGJmXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMmRlODFhZGMtYzI5OC00NWRhLTg0NTctZjMyZDcyNzlmYjNiXkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOWU2N2I3YjktOWQ2Ny00MzI0LTkyNmMtMjk4NzZiMzIzY2UxXkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMWRlYWJkMWMtZmJiMi00NzQ2LThjYmUtZTRlMmJkYWZkOWI3XkEyXkFqcGc@._V1_FMjpg_UX500_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg"
    },
    {
        "id": "3",
        "names": {
            "original": "Shingeki no Kyojin",
            "en": "Attack on Titan",
            "fr": "L'Attaque des Titans"
        },
        "info": {
            "year": "2013",
            "episodes": "88",
            "synopsis": {
                "en": "Humans fight for survival against giant man-eating humanoids.",
                "fr": "L'humanit\u00e9 lutte pour sa survie contre des humano\u00efdes g\u00e9ants mangeurs d'hommes."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZmRkMDYxOGYtY2U3MC00NzhiLWIyZDMtMTg3M2FmMjQxMzc3XkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZTExOTExOTktNDFlZS00Zjk4LWFlNzItYWY0NzMwNDUyMGUzXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg", 
            "https://m.media-amazon.com/images/M/MV5BMmYyNWRmZjgtY2JiNS00M2FlLWEzYjQtNzY1MjFlZmQyOWYwXkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjY0YThlODktYmQwMS00NGViLWFjNDgtNjZiN2ZmNDZlYjBmXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg" 
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_QL75_UY562_CR9,0,380,562_.jpg"
    },
    {
        "id": "4",
        "names": {
            "original": "Hagane no Renkinjutsushi",
            "en": "Fullmetal Alchemist",
            "fr": "Fullmetal Alchemist"
        },
        "info": {
            "year": "2009",
            "episodes": "64",
            "synopsis": {
                "en": "Two brothers use alchemy to find the Philosopher's Stone.",
                "fr": "Deux fr\u00e8res utilisent l'alchimie pour trouver la Pierre Philosophale."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZDlhNzk2MDMtYTFkNS00NmVkLThhMzgtYmVlZmYxNDVlNjVmXkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYjU1YzM1NjktODFhOC00YTkxLWI1MzQtYTJiNTE4MmQxMjkzXkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYjkwNTY1YjgtNjA1NS00ZjBiLTk2NGItM2ViY2MxYTc1ZDU1XkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYjc4ZjA3MWItODMzOC00NzRhLWE1ZmEtMWNjNTUzNTQ2NTZkXkEyXkFqcGc@._V1_FMjpg_UX500_.jpg" 
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_QL75_UY562_CR11,0,380,562_.jpg"
    },
    {
        "id": "5",
        "names": {
            "original": "Dragon Ball",
            "en": "Dragon Ball",
            "fr": "Dragon Ball"
        },
        "info": {
            "year": "1989",
            "episodes": "291",
            "synopsis": {
                "en": "Goku defends the Earth against powerful aliens and villains.",
                "fr": "Goku d\u00e9fend la Terre contre de puissants extraterrestres et m\u00e9chants."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZWVjNjczZjctZmM1OC00NTk4LWFjZmEtODVjNzUyNjIyNjY2XkEyXkFqcGc@._V1_FMjpg_UX708_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZGE1ZjM4ZWUtZWM1ZC00NTU5LThhYTEtZWJkNDc2ZjFlMTQ2XkEyXkFqcGc@._V1_FMjpg_UX1202_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZTVkYTIxMzYtODVkNy00M2FkLTg2MWEtMGFmZWI2YWE0NTk3XkEyXkFqcGc@._V1_FMjpg_UX977_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjhiN2RmZjAtMjkwYi00MjcwLTk0MWYtYzhiZTA3NTU5YjUwXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BOWI0NzkxYTUtNGU5MS00MTUwLTk3NDItMTFlZDJiM2NlZDAxXkEyXkFqcGc@._V1_QL75_UY562_CR184,0,380,562_.jpg"
    },
    {
        "id": "6",
        "names": {
            "original": "Death Note",
            "en": "Death Note",
            "fr": "Death Note"
        },
        "info": {
            "year": "2006",
            "episodes": "37",
            "synopsis": {
                "en": "A high school student finds a notebook that kills anyone whose name is written in it.",
                "fr": "Un lyc\u00e9en trouve un carnet qui tue quiconque dont le nom y est \u00e9crit."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMDQ2YTkwYmUtZWZiYS00NWQyLWE2NzUtYmQ1NDFlYzY2ZDg4XkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZDMxMzE3NTYtY2M0Zi00YTUxLWEyY2MtZTE5YjdjNWI5MGYwXkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNDYyOGNlZTUtMTNmMS00MGU3LTllMWEtMjliNDVkMTYzZjM0XkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BODRhOWE3YzYtZjJmYi00ZjZmLTk0OTEtMzlhMzBhYmE4OTk5XkEyXkFqcGc@._V1_FMjpg_UX500_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "id": "7",
        "names": {
            "original": "Kimetsu no Yaiba",
            "en": "Demon Slayer",
            "fr": "Demon Slayer"
        },
        "info": {
            "year": "2019",
            "episodes": "55+",
            "synopsis": {
                "en": "Tanjiro becomes a demon slayer to cure his sister.",
                "fr": "Tanjiro devient un pourfendeur de d\u00e9mons pour gu\u00e9rir sa s\u0153ur."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNDJjMWI2OTYtMWI2Ny00Yzc2LWExZWItNWJlMmMwOTRiYmY3XkEyXkFqcGc@._V1_FMjpg_UX1600_.jpghttps://placeholder.com/img7.jpg",
            "https://m.media-amazon.com/images/M/MV5BYWJkYTViZjktYzQyYi00MGRmLWFjNzAtNDNkYjlmMDU0NjEyXkEyXkFqcGc@._V1_.jpghttps://placeholder.com/img7.jpg",
            "https://m.media-amazon.com/images/M/MV5BZGUzYTkyODYtODQ0Mi00OWE2LWJlODAtNDhhYjI2ODAyZjdmXkEyXkFqcGc@._V1_FMjpg_UX1920_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOGIwNTY2MGUtYTQ4Yi00OTVhLThkM2MtMzIyODI2MDg5ZjZjXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "id": "8",
        "names": {
            "original": "Boku no Hero Academia",
            "en": "My Hero Academia",
            "fr": "My Hero Academia"
        },
        "info": {
            "year": "2016",
            "episodes": "150+",
            "synopsis": {
                "en": "A boy born without superpowers joins a hero academy.",
                "fr": "Un gar\u00e7on n\u00e9 sans super-pouvoirs rejoint une acad\u00e9mie de h\u00e9ros."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BYzhmMWI2NjYtZjE5Yi00MDhjLWFhNjEtZThhOGYzNDllNTg5XkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjE2OTM2OTcwOV5BMl5BanBnXkFtZTgwMzQ2MjMyOTE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BODFiNDgyZDQtMzVkMS00YmIzLWIxNjktOTc0ZDVkMWVmOTI3XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYmQ1NmMxMGQtZDg2NS00OWE4LWIyMWItOTdjYjgwZWE5YjZkXkEyXkFqcGc@._V1_FMjpg_UX1920_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "9",
        "names": {
            "original": "Hunter x Hunter",
            "en": "Hunter x Hunter",
            "fr": "Hunter x Hunter"
        },
        "info": {
            "year": "2011",
            "episodes": "148",
            "synopsis": {
                "en": "Gon Freecss aims to become a Hunter to find his father.",
                "fr": "Gon Freecss aspire \u00e0 devenir un Hunter pour retrouver son p\u00e8re."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNTA5ODJlNGQtOWQxMC00MzQzLWI1MzAtMmRlMzJhNzNiZGIxXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNDNkYjVmN2ItYjQwYi00ZTRkLTkzZTUtYjBiMDc2MzQ1YjFmXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOTFlMWE3MWEtNGJhYy00YTIxLTk4OGEtNjU3M2MyZmU2MmYyXkEyXkFqcGc@._V1_FMjpg_UX720_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQ3ZDZlODItYzM5Yi00YTkzLTgwMjUtYzNlNmEwNjIxMTMzXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"
    },
    {
        "id": "10",
        "names": {
            "original": "Jujutsu Kaisen",
            "en": "Jujutsu Kaisen",
            "fr": "Jujutsu Kaisen"
        },
        "info": {
            "year": "2020",
            "episodes": "47+",
            "synopsis": {
                "en": "A boy swallows a cursed finger and enters a world of sorcerers.",
                "fr": "Un gar\u00e7on avale un doigt maudit et entre dans le monde des exorcistes."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNDhkNTVlYjYtMzY4My00N2FkLWE4ZmUtMmU4NjZlNGVjMDE5XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BY2VlNWVhMTktMGYzYS00MDU4LWFhMzItZDA5ZjdmMjdjMjg0XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BODUxMTJhODUtNWYwMy00MjllLWE0NjItZjNhZDdlODRhYzAwXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZjE3MmM0MjAtNzhmMS00NDQ4LTkxMjEtMzkzNzhmNGJlNjVhXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMjBlNTExMDAtMWZjZi00MDc5LWFkMjgtZDU0ZWQ5ODk3YWY5XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "11",
        "names": {
            "original": "Bleach",
            "en": "Bleach",
            "fr": "Bleach"
        },
        "info": {
            "year": "2004",
            "episodes": "366",
            "synopsis": {
                "en": "Ichigo Kurosaki gains the powers of a Soul Reaper.",
                "fr": "Ichigo Kurosaki obtient les pouvoirs d'un Shinigami."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZjM2MWQ1MWEtNjQwMy00NDU5LTlkZDItYzk3ZTgwYTA3YTBjXkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYTQ1MzQ1NTQtYzFiZi00Y2I5LThiY2UtMjljZjJkMWEwMmQyXkEyXkFqcGc@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTU0Mjc1NzU0M15BMl5BanBnXkFtZTgwOTYxODMzOTE@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTU3NjM3MzcyNF5BMl5BanBnXkFtZTgwMDg3NjQzMzE@._V1_FMjpg_UX500_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "id": "12",
        "names": {
            "original": "Cowboy Bebop",
            "en": "Cowboy Bebop",
            "fr": "Cowboy Bebop"
        },
        "info": {
            "year": "1998",
            "episodes": "26",
            "synopsis": {
                "en": "Bounty hunters travel through space in the year 2071.",
                "fr": "Des chasseurs de primes voyagent dans l'espace en 2071."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BODUxODE4NDE0N15BMl5BanBnXkFtZTgwNjk4ODE1MDE@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BY2NiN2YyNWEtMTdhZi00MzUxLWI2ZDMtNzJhMmJhMWVlZDI3XkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZDVjYjJkOTgtMmEzYS00ZmExLWIyMDctMTIyZTNlN2U4MWM3XkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZjJlMTk2NmUtMDg4ZS00MDgyLWI4MzAtMTY5NDNjOGI4M2UwXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMTU3ZTdiOGQtYmYwYy00OGM5LThmNjMtZGJmNTVlZjk1ZmEyXkEyXkFqcGc@._V1_QL75_UY562_CR16,0,380,562_.jpg"
    },
    {
        "id": "13",
        "names": {
            "original": "Neon Genesis Evangelion",
            "en": "Neon Genesis Evangelion",
            "fr": "Neon Genesis Evangelion"
        },
        "info": {
            "year": "1995",
            "episodes": "26",
            "synopsis": {
                "en": "Teens pilot giant mechs to defend humanity against Angels.",
                "fr": "Des ados pilotent des mechs g\u00e9ants pour d\u00e9fendre l'humanit\u00e9 contre les Anges."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZjZjZGI3ZDQtODNmZC00NjE0LTlmYTUtOTljMWI2YjNmMTQ0XkEyXkFqcGc@._V1_QL75_UY562_CR9,0,380,562_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOTJlOGY2ZWQtODBmNS00ZDUxLTg2OWUtODNhZWM2ZmNjMmFjXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZWJhMjJiMTctYzBhNi00N2I2LWJmYmItYWE2NTdmZDI2NWZjXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYWI3M2MwNzItZTM4Yi00NzI3LWExOWMtZGExOWQzM2EyY2ZiXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZjZjZGI3ZDQtODNmZC00NjE0LTlmYTUtOTljMWI2YjNmMTQ0XkEyXkFqcGc@._V1_QL75_UY562_CR9,0,380,562_.jpg"
    },
    {
        "id": "14",
        "names": {
            "original": "One Punch Man",
            "en": "One Punch Man",
            "fr": "One Punch Man"
        },
        "info": {
            "year": "2015",
            "episodes": "24",
            "synopsis": {
                "en": "A hero who can defeat any enemy with a single punch.",
                "fr": "Un h\u00e9ros qui peut vaincre n'importe quel ennemi d'un seul coup de poing."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BYTI3ZDBlZTUtNDE2My00MzhkLWFjNGYtNjk4MzJhMTkxYTI5XkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZTk5MmUzMDItMzU1OC00Mzg3LWI1ZDEtNGNjNjFkODg0MjFiXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNDE5NTFlOWItM2JlNy00M2MwLTg4OTMtNDI3Y2JhMzEwYzc5XkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNzFhY2JlYWItOGFlMS00ZGRkLWJjZGMtY2Y5N2UwNWRjOTU3XkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BNzMwOGQ5MWItNzE3My00ZDYyLTk4NzAtZWIyYWI0NTZhYzY0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "id": "15",
        "names": {
            "original": "Steins;Gate",
            "en": "Steins;Gate",
            "fr": "Steins;Gate"
        },
        "info": {
            "year": "2011",
            "episodes": "24",
            "synopsis": {
                "en": "A scientist discovers a way to send messages to the past.",
                "fr": "Un scientifique d\u00e9couvre un moyen d'envoyer des messages dans le pass\u00e9."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTQ1MjgzOTA4MV5BMl5BanBnXkFtZTgwMTA5Njc5MjE@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTYyNDkxNTg1Nl5BMl5BanBnXkFtZTgwODQ2Njc5MjE@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQ0MDM1OTY4MV5BMl5BanBnXkFtZTgwNzQ2Njc5MjE@._V1_FMjpg_UX500_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjQwNzIyMzMzMV5BMl5BanBnXkFtZTgwMzA5Njc5MjE@._V1_FMjpg_UX500_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "id": "16",
        "names": {
            "original": "Code Geass",
            "en": "Code Geass",
            "fr": "Code Geass"
        },
        "info": {
            "year": "2006",
            "episodes": "50",
            "synopsis": {
                "en": "An exiled prince gains the power of absolute obedience.",
                "fr": "Un prince exil\u00e9 obtient le pouvoir de l'ob\u00e9issance absolue."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMjM3NzIxZGMtZTFjOC00ODU3LWEwMDgtMTdiZTY4NzhhNWZmXkEyXkFqcGc@._V1_FMjpg_UX730_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYjg1YjIxMGYtYmMxOC00MjI3LWFlMjctYTg5MzUyNGEzNmU1XkEyXkFqcGc@._V1_FMjpg_UX650_.jpg",
            "https://m.media-amazon.com/images/M/MV5BN2QwZWExZjEtZWNmYS00MGQ5LWJhMzYtMThiYTM5MWU0ZGExXkEyXkFqcGc@._V1_FMjpg_UX791_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMzcyZmExNTktM2M1My00NGFhLTk0YzAtOTkzZWRkYzgwNmZiXkEyXkFqcGc@._V1_FMjpg_UX777_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BNTk4MWYwNmUtODFjNC00NWJhLWExNGYtMGU4YmRlNzEwOTY1XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg"
    },
    {
        "id": "17",
        "names": {
            "original": "Vinland Saga",
            "en": "Vinland Saga",
            "fr": "Vinland Saga"
        },
        "info": {
            "year": "2019",
            "episodes": "48",
            "synopsis": {
                "en": "A young man seeks revenge against his father's killer in Viking times.",
                "fr": "Un jeune homme cherche vengeance contre le meurtrier de son p\u00e8re \u00e0 l'\u00e9poque Viking."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZjQzYzM4MjUtNjc1MS00NGM5LThhZGEtMGUzNjYwYzc5MWUyXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjVhOWNkMTYtZTZmMi00NzU1LTgyZWEtNzcyYzE2NGJlZDJiXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjQxMDA1OGItMjc1Zi00ZTQ3LTk4MjktYmEwZjI1MDY3Y2Y3XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYjg1M2E2YjMtYjI4NC00N2M0LWI0MzQtZTQ5YmQzMmUwZjUwXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_QL75_UY281_CR5,0,190,281_.jpg"
    },
    {
        "id": "18",
        "names": {
            "original": "Spy x Family",
            "en": "Spy x Family",
            "fr": "Spy x Family"
        },
        "info": {
            "year": "2022",
            "episodes": "37+",
            "synopsis": {
                "en": "A spy creates a fake family to fulfill a mission.",
                "fr": "Un espion cr\u00e9e une fausse famille pour mener \u00e0 bien une mission."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BYmZiODY4NTgtNmYwYi00YmUxLWI5MjQtODdlYThiODgyNjk5XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BM2Q0MWVlMmUtMmMzMC00NGJlLTk5ZTAtMDQ0ZmEwMTAxZTM5XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYzMxOTY5ODUtMmRmMi00OTE1LThkYjctN2EyY2ZiNGUxNWIzXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTkwNjgwMDEtODkxNy00MzcxLTgxZjItYjY1NTk4OTVmODcxXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZDkwNjc0NWEtNzJlOC00N2YwLTk4MjktZGFlZDE2Y2QzOWI0XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "19",
        "names": {
            "original": "Tokyo Ghoul",
            "en": "Tokyo Ghoul",
            "fr": "Tokyo Ghoul"
        },
        "info": {
            "year": "2014",
            "episodes": "24",
            "synopsis": {
                "en": "A student becomes a half-ghoul after a chance encounter.",
                "fr": "Un \u00e9tudiant devient une demi-goule apr\u00e8s une rencontre fortuite."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BYjVmNDY2NWYtZjJmOC00YzQ5LTgxZDAtZTU2YmVmOWI1YTAwXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BY2VlMWZjZDktNGFlNy00YTRiLTk4OTgtZjNmNmY0YWEwY2U0XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOGNlOTYzYTYtZmRkYi00Mjk5LWI2NGMtMWY2NzNjNWU1ZWM2XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNThhZjQwOTUtZWYwOC00NDUzLWExNjAtODY0OTQzNjQ0MzhkXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"
    },
    {
        "id": "20",
        "names": {
            "original": "Sword Art Online",
            "en": "Sword Art Online",
            "fr": "Sword Art Online"
        },
        "info": {
            "year": "2012",
            "episodes": "96",
            "synopsis": {
                "en": "Players are trapped in a virtual reality MMORPG.",
                "fr": "Des joueurs sont pi\u00e9g\u00e9s dans un MMORPG en r\u00e9alit\u00e9 virtuelle."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BOTFmNWQ0NmItZjg4Ny00OGFlLTg3MGEtYmYwY2JkYWVmOTYwXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZmI1YzljYTgtYjBjMC00MWFhLWJiNWQtYTcxNjY0N2U1MTc5XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNGE1YTIxZTUtMjRmZi00YThkLWJhNjEtZmI3NTk2ZmIyNzMyXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNWEzMzA5MGMtZGEwZS00ZWQzLWEzOWUtOTAzMWY1ZWRlNzA3XkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BN2NhYzU2NDEtYzI1NS00MjgzLThjZGUtOTYxNGJkZjZmNDdjXkEyXkFqcGc@._V1_QL75_UY281_CR6,0,190,281_.jpg"
    },
    {
        "id": "21",
        "names": {
            "original": "Mob Psycho 100",
            "en": "Mob Psycho 100",
            "fr": "Mob Psycho 100"
        },
        "info": {
            "year": "2016",
            "episodes": "37",
            "synopsis": {
                "en": "A middle school boy with powerful psychic abilities.",
                "fr": "Un coll\u00e9gien dot\u00e9 de puissants pouvoirs psychiques."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BYzhmYTIyZmUtYTUzNi00ODBlLTk2NDMtOTI1ODZiNjliM2FmXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZGY0NzM0OWUtMDgzOS00NWI1LWI0NzQtZWMzNjc1NDk4MDdmXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BODcyZTgxNDEtMDgzYS00YTc0LThhZWQtNTNkYzQ0MTQzYzYwXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYWJjZjUzODUtOWVhZi00YjBiLTkyODktY2Q5ODNjZGZiMzk1XkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BYzU3NDM4ZjgtY2UyMi00YTczLTgyNDEtMjBiMDJlOGUxNjcxXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "22",
        "names": {
            "original": "Ansatsu Kyoushitsu",
            "en": "Assassination Classroom",
            "fr": "Assassination Classroom"
        },
        "info": {
            "year": "2015",
            "episodes": "47",
            "synopsis": {
                "en": "Students try to kill their alien teacher to save Earth.",
                "fr": "Des élèves tentent de tuer leur professeur extraterrestre pour sauver la Terre."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNmVkN2YwMzYtOTg3Yi00MTJhLTkzODAtMDhiYzQzNGFkZGFkXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZDJiZDgyOWQtY2JmNC00MDQxLTllZWEtMTMzMGQ1NDZjZTg3XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMDVmY2ZlYzYtNjE3NC00ODQyLTkyNjEtZWI3YTliMmNiOGJlXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNmQ1YmY4ZDMtNTczMC00YzBlLThmN2MtY2VhZjE0ZWMyN2Y3XkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMmZkMmQwN2EtNmFmZi00ZTBhLWEwODktNmYzMGI1NGJjNGRmXkEyXkFqcGc@._V1_QL75_UY281_CR5,0,190,281_.jpg"
    },
    {
        "id": "23",
        "names": {
            "original": "Fairy Tail",
            "en": "Fairy Tail",
            "fr": "Fairy Tail"
        },
        "info": {
            "year": "2009",
            "episodes": "328",
            "synopsis": {
                "en": "Lucy joins the famous wizards' guild Fairy Tail.",
                "fr": "Lucy rejoint la c\u00e9l\u00e8bre guilde de magiciens Fairy Tail."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTY3MTU1MzgxM15BMl5BanBnXkFtZTgwMjExOTA3NjE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjM5MDA3ODIwOV5BMl5BanBnXkFtZTgwNjE2MTU1MjE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYTJmZjRiOGEtNjVkMi00NjAzLTg3ZDUtZDQyY2M2YjI5YTg2XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BM2VlYTI2MTktNTMxMS00ZDE0LTg0MWEtZDUwMTMwZmJmMDAzXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BODlhNTQ3ZDgtMDJlMC00YzdmLWE3ZTMtOWNmMTZkN2I2MzI5XkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"
    },
    {
        "id": "24",
        "names": {
            "original": "Black Clover",
            "en": "Black Clover",
            "fr": "Black Clover"
        },
        "info": {
            "year": "2017",
            "episodes": "170",
            "synopsis": {
                "en": "A boy without magic aims to become the Wizard King.",
                "fr": "Un gar\u00e7on sans magie aspire \u00e0 devenir l'Empereur-Mage."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNDlkMDA3NmItODNmNi00MjMxLWE5ODEtMGQ1OTk0NTI3OGY2XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjZlYjExYTctOWE2ZS00YjdiLTlmZTgtYTljYWMyZmZjMzc3XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZWQyZjViNDMtNGJiOC00ODFjLTg5ZjctZDk0MWFiYjQ5YzUxXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BM2UzZmFkZmUtNDM4Zi00MDk1LTkzY2MtMjRhOTY1ZmJmMDIwXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "25",
        "names": {
            "original": "JoJo no Kimyou na Bouken",
            "en": "JoJo's Bizarre Adventure",
            "fr": "JoJo's Bizarre Adventure"
        },
        "info": {
            "year": "2012",
            "episodes": "190",
            "synopsis": {
                "en": "The intergenerational story of the Joestar family.",
                "fr": "L'histoire interg\u00e9n\u00e9rationnelle de la famille Joestar."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BY2YwOTlkOWUtYWQ1NC00ODEzLTg1OGUtNDllZjcyNzU1YzcyXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTBmMTJmYmUtNzJhZC00ZWYzLWJmYzEtYTY2OWEyZDBiN2IyXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNWQ3MmMyMTQtMjI5MC00NjNmLWI3YTItYjY0YzJjNGQxNDU1XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMzllZDJiODUtN2RlOC00YTUxLThhYjUtOTNiYTM2NTk3NzMzXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMzIyNzY4NTMtNmVhYS00OWFhLTkwMWMtOGFkNTdmNWU2ZDdiXkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"
    },
    {
        "id": "26",
        "names": {
            "original": "Haikyuu!!",
            "en": "Haikyu!!",
            "fr": "Haikyu!!"
        },
        "info": {
            "year": "2014",
            "episodes": "85",
            "synopsis": {
                "en": "A short boy aspires to be a great volleyball player.",
                "fr": "Un gar\u00e7on de petite taille aspire \u00e0 devenir un grand joueur de volley."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZjYxMjU0YWQtNWU5Ny00NjdiLWFiZDQtYTFmODEyMGIyZjMxXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZWRiOTRjYTgtYjZjMi00ZDkyLWEyZWItNzkxZGI4NGRhMTE2XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYzAwMWI1N2MtMGZmMi00MGYzLWI3YTgtODFkZjRjY2JkMGNhXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMWM2ZjlkZjgtZWQ5MS00OWY1LTg5N2ItOGU1ZDQwMmFmNzdmXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BYjYxMWFlYTAtYTk0YS00NTMxLWJjNTQtM2E0NjdhYTRhNzE4XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "27",
        "names": {
            "original": "Slam Dunk",
            "en": "Slam Dunk",
            "fr": "Slam Dunk"
        },
        "info": {
            "year": "1993",
            "episodes": "101",
            "synopsis": {
                "en": "A delinquent joins the basketball team to impress a girl.",
                "fr": "Un d\u00e9linquant rejoint l'\u00e9quipe de basket pour impressionner une fille."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BM2M5M2Q3ZDMtOTY5My00OGVhLThjOTQtZGVkNjQ3YzliZjAzXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMDYyYWY5MjYtYjAzZi00NTk4LThlNWYtZmMyMjIzN2ExMjc3XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZGIwMTQ0MTgtZjU3ZS00M2U4LTliZjktYjA1YjhjZDExOTk0XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZGIwMTQ0MTgtZjU3ZS00M2U4LTliZjktYjA1YjhjZDExOTk0XkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BNjIyYjg4YWUtNTM2OS00YTc3LWE5NTEtZTdmMDdiMzE1OGJjXkEyXkFqcGc@._V1_QL75_UY281_CR6,0,190,281_.jpg"
    },
    {
        "id": "28",
        "names": {
            "original": "Yu Yu Hakusho",
            "en": "Yu Yu Hakusho",
            "fr": "Yu Yu Hakusho"
        },
        "info": {
            "year": "1992",
            "episodes": "112",
            "synopsis": {
                "en": "A delinquent is resurrected as a Spirit Detective.",
                "fr": "Un d\u00e9linquant est ressuscit\u00e9 en tant que d\u00e9tective spirituel."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZjg4NGQ3NGItYjdiYS00NDRmLThhOGQtMzIzY2U3MjBmOGY4XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYzJjMTAxMGQtZTBjOS00OTM0LTllYzktMWEyZDAwYTRjMGFkXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjhmYTM0OTgtYjhiMS00YTU2LThhN2UtN2NjYTUxOGE1MTIyXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZjlkMWMyMDQtMzA5ZC00NWM4LTkyMWUtN2Y2MDVhNTA4ZTZjXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BNWJmODlhODItZTZmYi00ZGNjLTk1NmYtMjE5M2IwYjI2MzI2XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "29",
        "names": {
            "original": "Rurouni Kenshin",
            "en": "Samurai X",
            "fr": "Kenshin le Vagabond"
        },
        "info": {
            "year": "1996",
            "episodes": "95",
            "synopsis": {
                "en": "A wandering swordsman protects people to atone for his past.",
                "fr": "Un \u00e9p\u00e9iste errant prot\u00e8ge les gens pour racheter son pass\u00e9."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BYWI2MjVlMzktNmQ4NC00MGY2LWEyNGYtYTg3NjdkYmI1MTRhXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BM2Y3YTRiOGUtYTgxZC00NDMyLTg2ZjAtODAzMTVkY2E1ZmVkXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNTRiNWNjNmItMDg4NC00NWZhLWIxODMtODM4ZTQ0ZDMyOWIwXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYWFhNzcxNDQtMjJmOC00YWIxLTk1MWEtNmY0YWU5MWNjMGI5XkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BNjhiMzRkMmEtMzZhNi00ZTNhLWIxZTEtZDE3MTA4NzY4OWY2XkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"
    },
    {
        "id": "30",
        "names": {
            "original": "Dr. Stone",
            "en": "Dr. Stone",
            "fr": "Dr. Stone"
        },
        "info": {
            "year": "2019",
            "episodes": "58",
            "synopsis": {
                "en": "Humanity is petrified and a genius tries to rebuild civilization.",
                "fr": "L'humanit\u00e9 est p\u00e9trifi\u00e9e et un g\u00e9nie tente de reb\u00e2tir la civilisation."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BOTA0MDJhMTEtMDIwMS00YmQ4LWI4OTctYjQ0ZDIxM2ZhOTk2XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYmIzODk3MjctMGQyOS00ZjMwLWI1MWQtMDlmNzY0YzdmYmE3XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNTJjM2E2NmUtM2Q5Zi00ODJkLTg2NjktMDBhY2Y0MzY0NmMxXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYWI3MzYyOGEtYmQ1My00YmJhLTllZTYtNTFkZTJkMWJiNWE2XkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BYzZkYjM1MWMtNTY3Mi00MTMzLTlhNmQtN2ExZjFkYzdjZmFjXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "31",
        "names": {
            "original": "Chainsaw Man",
            "en": "Chainsaw Man",
            "fr": "Chainsaw Man"
        },
        "info": {
            "year": "2022",
            "episodes": "12",
            "synopsis": {
                "en": "A young man merges with his pet devil to fight.",
                "fr": "Un jeune homme fusionne avec son d\u00e9mon familier pour combattre."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BN2E2ODE3YzUtNTBjNC00NzYzLTg0NTYtYmNhYjhiY2E0ZGI0XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjllMTYyYTItZDJhNy00MmIzLTk1ZDktZGIxNDlhNjgyYzFmXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZGRkMTI5Y2EtNGU2Yy00ZGQ3LTg4MzMtYzcwY2YwOTRhNTU2XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZjY4N2UzZmEtOGM0MC00MWZkLWFlNjAtOGQxNzNlODFiZTFjXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZGY2ZTM2MWMtNzA2OS00ZjJlLWIwZTMtMDBhN2EwYjZjZjEyXkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg"
    },
    {
        "id": "32",
        "names": {
            "original": "Berserk",
            "en": "Berserk",
            "fr": "Berserk"
        },
        "info": {
            "year": "1997",
            "episodes": "25",
            "synopsis": {
                "en": "Guts is a lone mercenary who joins the Band of the Hawk.",
                "fr": "Guts est un mercenaire solitaire qui rejoint la Troupe du Faucon."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMWIwODVkNTMtYjQwYy00ZTQ5LTg0YmUtYjFiNjY1ZjdjMmJkXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNmVjNjBjNGEtMDMwMC00NWU5LWI1MWYtOWNhYjgwZmM4NDhlXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMDFkZWMxZjgtZDM0OS00ZDc4LTkxZmQtMzI3NjZlOGQxM2M0XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZWVmMWIyZGEtNTFkNS00YjVlLWEwOTctYzA4YjJlNzI0Y2MzXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMzEzMzhkNDgtY2Q0YS00MDk0LTg0YzItODY5ZjNjMDc4ODI3XkEyXkFqcGc@._V1_QL75_UY281_CR8,0,190,281_.jpg"
    },
    {
        "id": "33",
        "names": {
            "original": "Monster",
            "en": "Monster",
            "fr": "Monster"
        },
        "info": {
            "year": "2004",
            "episodes": "74",
            "synopsis": {
                "en": "A surgeon tracks down a sociopath he once saved.",
                "fr": "Un chirurgien traque un sociopathe qu'il a autrefois sauv\u00e9."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTQzMjEzODUxMl5BMl5BanBnXkFtZTgwMDQ5MTY1MjE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNTRkYmM1OGEtYTBjNy00YzQyLTgxMjAtMGYyNTAzMDAxZmY4XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjI0Mzc0MjE3OV5BMl5BanBnXkFtZTgwNTY5MTY1MjE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQ2Njg1ODU3OF5BMl5BanBnXkFtZTgwMjU4MTY1MjE@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BYzU2MWQ5NGQtYmNlMC00ZjJkLWJmODItZDM5MDM3YmUyMWJkXkEyXkFqcGc@._V1_QL75_UY281_CR5,0,190,281_.jpg"
    },
    {
        "id": "34",
        "names": {
            "original": "Saint Seiya",
            "en": "Knights of the Zodiac",
            "fr": "Les Chevaliers du Zodiaque"
        },
        "info": {
            "year": "1986",
            "episodes": "114",
            "synopsis": {
                "en": "Warriors protect the goddess Athena using mystical armor.",
                "fr": "Des guerriers prot\u00e8gent la d\u00e9esse Ath\u00e9na avec des armures mystiques."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMjc4OTdlNDUtZDg4Mi00NmM3LTgyNTgtYjM5MGRhY2FjOWZlXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BY2YxYzE5MGYtYTYxMy00NDg5LWE5OTEtZDUxNDc0OTViNjY1XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMmMxNDUyZTEtODUxMy00ZmM2LTlhNzUtNDMxMDRhMjQ5Mzc1XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMzI5MmIzMjMtYjc5MS00MDFiLTg2YTctMTRkODVkODBjNjQ0XkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZDI1M2U3NDktNmU3Mi00NDFiLTkyZTUtMjcxNWMzMWVmM2Y5XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "35",
        "names": {
            "original": "Great Teacher Onizuka",
            "en": "GTO",
            "fr": "GTO"
        },
        "info": {
            "year": "1999",
            "episodes": "43",
            "synopsis": {
                "en": "A former biker becomes a teacher to change students' lives.",
                "fr": "Un ancien motard devient prof pour changer la vie de ses \u00e9l\u00e8ves."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNzRmMGY1Y2ItNTU3ZS00ZDI5LWI5ZmEtOWIwZDc5M2UwYWE4XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTk5YWU2ZWYtZmU0Yi00N2Q3LTgzMjktNTI1ODY1YmU2NzBiXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYmVlYTFlYWEtYTEwYi00NjM4LWI4ZWYtYjZjZjhiYTM2OTUxXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNWE1ZGE2YWUtMWZlYi00MGQ4LWIwNDItMzljNTU5NGMxZTYwXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BNzYwN2UyNDAtZTQ3My00ZjQ4LWE2ZmYtZDZiMTlhZGM3ZTc4XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "36",
        "names": {
            "original": "Oshi no Ko",
            "en": "Oshi no Ko",
            "fr": "Oshi no Ko"
        },
        "info": {
            "year": "2023",
            "episodes": "24",
            "synopsis": {
                "en": "A doctor and a patient are reborn as their favorite idol's children.",
                "fr": "Un m\u00e9decin et sa patiente renaissent comme enfants de leur idole favorite."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BOGVhNzJhZDUtZTFhOS00Y2JmLWJlOWQtNGRiMWQyNzliYWQxXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BY2EwZDYwMmItNDA3OC00MGY2LTllYzUtNjdjMjc2ZDI2MjdhXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYmNiMWRiNDItNTEzMS00NDBjLTk1OWYtOWUwNzY0OWMyYjE2XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZWViNjNiMWEtNmRlMS00ZGFkLTk4MjUtNjg5YmFiNmYxNTcwXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BYzM3ZGJkN2YtOTQ5Ny00MzEyLTlkMzQtZDVhYzM3YWFlM2QwXkEyXkFqcGc@._V1_QL75_UY281_CR5,0,190,281_.jpg"
    },
    {
        "id": "37",
        "names": {
            "original": "Cyberpunk",
            "en": "Cyberpunk",
            "fr": "Cyberpunk"
        },
        "info": {
            "year": "2022",
            "episodes": "10",
            "synopsis": {
                "en": "A street kid tries to survive in a technology-obsessed city.",
                "fr": "Un gamin des rues tente de survivre dans une ville obs\u00e9d\u00e9e par la technologie."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZjg2NDdkNmEtOWI2Yi00MmNmLWJlMDAtNTg3MWIzM2M0MDI5XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZDRjYzE0Y2QtMjEwNi00MTVhLWI3YjUtZjMzZTM5ZGViYTdlXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZWIxMDY3YWEtMmJlNi00ZDI5LWE2ZmItNjZjZDIxZWU4Nzg4XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMmFlMjVjOTItY2JlYy00ZGRiLWFhZDAtNDRlOWEyNTRiNjEwXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BM2JkMzM2ZmYtNWU4MS00MjZhLWFhZWUtYWFjYTJkN2RhZDliXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg"
    },
{
        "id": "38",
        "names": {
            "original": "Hajime no Ippo",
            "en": "Fighting Spirit",
            "fr": "Hajime no Ippo"
        },
        "info": {
            "year": "2000",
            "episodes": "126",
            "synopsis": {
                "en": "A shy high school student is rescued from bullies by a professional boxer and decides to follow in his footsteps.",
                "fr": "Un lycéen timide est sauvé de brutes par un boxeur professionnel et décide de suivre ses traces dans le monde de la boxe."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZDFlZjhiZDQtYjdmYS00ZWI5LThiMzQtNWM4NGQ3YWJiOTI3XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNGNmYWVkNzItNTg5YS00NThkLThmOTgtMDEyNjViNmYwOTQ5XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNGFkMDliZmUtYTI0ZC00MDBjLTllZTgtNzAzNzhiMTkwMGNjXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BODhlYTg1NGYtOWU3ZC00NWVjLWJkYzktODYyYWRkZmYzMDYyXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BN2UzMmM5NTQtYjUxYy00OWVjLTkwOWMtYzFhOGQxN2VlZjI5XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "39",
        "names": {
            "original": "Mushoku Tensei",
            "en": "Jobless Reincarnation",
            "fr": "Mushoku Tensei"
        },
        "info": {
            "year": "2021",
            "episodes": "48+",
            "synopsis": {
                "en": "An unemployed man is reincarnated in a world of magic.",
                "fr": "Un ch\u00f4meur se r\u00e9incarne dans un monde de magie."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNDhmMWZlYjItNTc0ZC00NmU1LTkxZjktOWY0NGZkYjg5ODAwXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZjZiOTliMjMtNzY3OC00NmMwLWI0N2ItNWM3NDg4YzdkYmI4XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOTY5NmM0MTYtMmY5NS00MWE2LTlmMjMtZDMwMDNjNzZkZjg5XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOWU5MjMyNzYtMzY1Ni00OWU5LWEzZDQtNTRjODE0MjBkNDIzXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BYWQwNjk3MDItNDAxMS00YTQ2LWEyNDctMGYyZTE5OGQxNGQ1XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "40",
        "names": {
            "original": "Your Lie in April",
            "en": "Your Lie in April",
            "fr": "Your Lie in April"
        },
        "info": {
            "year": "2014",
            "episodes": "22",
            "synopsis": {
                "en": "A piano prodigy meets a violinist who changes his life.",
                "fr": "Un prodige du piano rencontre une violoniste qui change sa vie."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMGE4ZDM3NDgtMjg2Yy00Y2M3LTg0NmEtYWZmN2M2MGQ4OWY5XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNTk5ZGZkNjUtYzI4MC00MDVhLWExZGItZDBjOTFkN2Y1OGUyXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNDUxOWI4ODktNTcxMS00MDMwLWI1YmItM2ZlMmE1MDc1ZTljXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNmIwNmZmZDktODk5Ny00N2U1LTliN2YtYjY5MzY4YzQxYWY1XkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZGMyYmFmNzgtMWQ4NS00MWE2LTg4YmEtZGY1MTBiODE0YmE5XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "41",
        "names": {
            "original": "Blue Lock",
            "en": "Blue Lock",
            "fr": "Blue Lock"
        },
        "info": {
            "year": "2022",
            "episodes": "24",
            "synopsis": {
                "en": "Japan creates a prison-like facility to produce the best striker.",
                "fr": "Le Japon cr\u00e9e un centre ferm\u00e9 pour produire le meilleur attaquant."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZGNjNzFhMGItYTQ3YS00ZDIzLWEwNDktOTY2NzgxMmQ3NmI2XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOTYxNDE3YzAtNjg2NS00YjQyLWE5ZDYtYTBlMzc4NmEwM2M1XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYmU4MjE4NDQtMmU5OC00NmNiLTk4NGEtZDk3NTJjOGVjZjhiXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjU2ZWE5NTgtZWFkZC00NjcwLWEyM2EtNTllZjBkYTFhMDRiXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BNWFlNmJkN2YtNGRiZS00NjExLTlmNmEtYzdiMTdiZmMzYzAwXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "42",
        "names": {
            "original": "Hellsing Ultimate",
            "en": "Hellsing Ultimate",
            "fr": "Hellsing Ultimate"
        },
        "info": {
            "year": "2006",
            "episodes": "10",
            "synopsis": {
                "en": "The vampire Alucard protects England from supernatural threats.",
                "fr": "Le vampire Alucard prot\u00e8ge l'Angleterre des menaces surnaturelles."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMjMwODAyNzc4Ml5BMl5BanBnXkFtZTgwNzc2Mzg5MTE@._V1_QL75_UX273_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTg0MDExNzUwOV5BMl5BanBnXkFtZTcwNzQzNTA0MQ@@._V1_QL75_UX149_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZmE4YjFhNjAtYzIyYS00MzljLWEzZjgtNWI3MTY1ZDQ1ODMwXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNWY0MDI1YTMtZTM0ZC00OTc4LTljNTUtNjU1MGQ2NTM4NTE4XkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZTA2OWJiYzgtZWFiOS00ZmYyLWFiMjMtYzg5YjNlMTA5NGJjXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "43",
        "names": {
            "original": "Parasyte",
            "en": "Parasyte",
            "fr": "Parasite"
        },
        "info": {
            "year": "2014",
            "episodes": "24",
            "synopsis": {
                "en": "Parasitic aliens arrive on Earth and take over human hosts.",
                "fr": "Des extraterrestres parasites arrivent sur Terre et prennent possession d'h\u00f4tes humains."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMGE4NDQ4MWQtMmI2Yy00NjY3LWExMTMtY2RjMjQ4YzJhYzM0XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNGIxODQzMTEtMThjZi00MTUyLTlkZDAtYTZlMjU4ZDViZWQ1XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMDQyYjBiOTEtZTJlMy00NzFkLTk1Y2UtZjFhYWMyZGZmZDE4XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMDU1NDlkMWYtMzExYy00ZmE1LWJmMGItOGY1MmVmZDdjNjQwXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMzg2YjA0NGYtYjQwMS00MDQyLWFlNWMtODVhNTBkYWIyNjE1XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "44",
        "names": {
            "original": "Violet Evergarden",
            "en": "Violet Evergarden",
            "fr": "Violet Evergarden"
        },
        "info": {
            "year": "2018",
            "episodes": "13",
            "synopsis": {
                "en": "An ex-soldier becomes a ghostwriter to understand love.",
                "fr": "Une ex-soldate devient r\u00e9dactrice pour comprendre le sens de l'amour."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNzRmYjQzN2MtY2IyYi00YjQ5LTljYzgtZTNiMjg1YWEwZjNhXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjkxYWY3ZTItNzZkMy00M2M5LWE4NGUtMWRkMDUyMzhjNTk1XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BY2I2Yzg2ZjctNjE3OC00OTgzLWEwMDUtZDE2ZGE5NDU0NzVlXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMzAxZWM5ODgtYzg0Yi00NmRkLWFhNTYtYzYyNWE1MTc3YWIwXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMWUwNDFiNjQtYjQ0MC00MTcxLWE0MGQtNTdkYTlhZGU2NDFmXkEyXkFqcGc@._V1_QL75_UY281_CR1,0,190,281_.jpg"
    },
    {
        "id": "45",
        "names": {
            "original": "Sora yori mo Tooi Basho",
            "en": "A Place Further Than the Universe",
            "fr": "A Place Further Than the Universe"
        },
        "info": {
            "year": "2018",
            "episodes": "13",
            "synopsis": {
                "en": "Four girls embark on an expedition to Antarctica.",
                "fr": "Quatre filles se lancent dans une exp\u00e9dition vers l'Antarctique."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BM2Y4MWNkOTAtM2YyMy00MTI0LTg1MWEtYjE4MzZkZDMyNGE3XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNDRmYjE3OTAtYzQ0OS00OTBkLThlMDQtZTFhNGRmMDdkZjVhXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjM4OTA0ZTYtYWVjOS00MzAyLWFkNWItZDRlN2Q2MWQ2ZWQwXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOTM0MzMzNDktODI0ZS00NGIwLThlOTctMDVmMTVkN2RmMTcwXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BNmQzYjI2NjgtMDY1Yy00OWViLWE3NjUtZmQxZTYwMzRhYzY1XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "46",
        "names": {
            "original": "Clannad",
            "en": "Clannad",
            "fr": "Clannad"
        },
        "info": {
            "year": "2007",
            "episodes": "23",
            "synopsis": {
                "en": "A delinquent student's life changes after meeting a girl named Nagisa.",
                "fr": "La vie d'un \u00e9tudiant d\u00e9linquant change apr\u00e8s avoir rencontr\u00e9 Nagisa."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNjhmZTkxZjEtYjg5Yi00NmJhLWIwN2MtYzQwMjk4MjU1OTQ0XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNDc2ZmJjZjctNWFkNy00ZjM5LThiNjAtNzhjNmM4NzNmZDY3XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNGFkYjU4YmYtNmZiMC00NjRlLWFkOTEtNGUwNzE0ODcxY2I3XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZjRkYzhjYjgtMjMwNS00NzViLTk3YzktY2FlMDRmMzgyYjZmXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMWJiNDQzNGEtNTA3Zi00NjM2LWE2NTAtOTU0NzA4ZmJiMjhmXkEyXkFqcGc@._V1_QL75_UY281_CR17,0,190,281_.jpg"
    },
    {
        "id": "48",
        "names": {
            "original": "Initial D",
            "en": "Initial D",
            "fr": "Initial D"
        },
        "info": {
            "year": "1998",
            "episodes": "81",
            "synopsis": {
                "en": "A tofu delivery boy becomes a legendary street racer.",
                "fr": "Un livreur de tofu devient un pilote de course de rue l\u00e9gendaire."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BYzJkMmNhZmMtYzJkNy00M2IzLTg1MzEtYzllNDRlMjBiM2QwXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNTQ3MTM2YjktNDU4My00NmQxLTg0MTYtN2UwYmI0OWJkMDYyXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYTQ3YmI1MzYtNzljNy00MThkLThjMTAtYjhjNzljNjI1YjQwXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjM0NzU5MzQ1OF5BMl5BanBnXkFtZTgwMTQ2MjY1MjE@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMWYzYWE3N2YtZDI0Yy00ZWU2LWI3YzgtMzEyNTg0ZjFmNWZjXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "49",
        "names": {
            "original": "Gintama",
            "en": "Gintama",
            "fr": "Gintama"
        },
        "info": {
            "year": "2006",
            "episodes": "367",
            "synopsis": {
                "en": "Samurai in an era where aliens have conquered Japan.",
                "fr": "Des samoura\u00efs \u00e0 une \u00e9poque o\u00f9 des extraterrestres ont conquis le Japon."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNDBhODEzODYtYjBkNy00OWUxLWI4MzctNmMyNDJkM2YxODUxXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZGRmMDc0MjYtOGExZC00NDM4LWFiYTMtYjA5ZTIzYTMwYmVhXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNTAzZmU5MDEtYTAyOS00ODZhLTgwMDQtOTYxNTA2OWQ2MDJmXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTA1YzMxNzktNDg0OC00NDAwLWE5MzgtNTMwYzM0OTkzMGY4XkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BNTMzNjE0N2ItNjFiYi00NmIzLTk1MzMtZWFjNThjMzI5MTJlXkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"
    },
    {
        "id": "50",
        "names": {
            "original": "Ghost in the Shell",
            "en": "Ghost in the Shell",
            "fr": "Ghost in the Shell"
        },
        "info": {
            "year": "1995",
            "episodes": "1",
            "synopsis": {
                "en": "A cyborg policewoman hunts a mysterious hacker.",
                "fr": "Une femme cyborg polici\u00e8re traque un myst\u00e9rieux hacker."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNGQ0ZGJkNmItMzNiOS00NmQ0LWFlMDYtMmFiYWUwYjRkYmE1XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYjEyMjFlMWEtNDk3ZS00ZDI3LWEzZDEtNTZhNTcwYjE3NGExXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYjNjYzhmYjctMDM2Zi00YmM4LTliYjMtODliNTk3YjlkOWRmXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZTNkOTVmMDgtNTk3YS00NmNhLTg5MGQtYTA0MDYxZTg0MmExXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BMDdhZmE1YzMtYTliYS00NGZmLTk5NDMtZTI1YWFlOTc3NTIyXkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"
    },
    {
        "id": "51",
        "names": {
            "original": "Sousou no Frieren",
            "en": "Frieren",
            "fr": "Frieren"
        },
        "info": {
            "year": "2023",
            "episodes": "28",
            "synopsis": {
                "en": "An elf mage reflects on life after her hero companions die.",
                "fr": "Une mage elfe r\u00e9fl\u00e9chit \u00e0 la vie apr\u00e8s la mort de ses compagnons h\u00e9ros."
            }
        },
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZjliMWNmYzUtYTM0Ny00YWUyLTg3ZmItMDgxNWJmYzU5MjBiXkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOGRiODZlMDEtN2I1MC00N2QxLTllNDEtZGZkYjdlODNiNmY4XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNGUzYTVjNTctZDkzMi00Yzk5LTlkZDctY2E2MzUzZTg3Mzc5XkEyXkFqcGc@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BN2Y4YzE4YzYtMzE3Yi00Yjc2LThhMDUtNTIzZWQ4ZDYxNWYyXkEyXkFqcGc@._V1_.jpg"
        ],
        "vignette": "https://m.media-amazon.com/images/M/MV5BZTI4ZGMxN2UtODlkYS00MTBjLWE1YzctYzc3NDViMGI0ZmJmXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
        "id": "52",
        "names": {
            "original": "Kaguya-sama wa Kokurasetai",
            "en": "Kaguya-sama",
            "fr": "Kaguya-sama"
        },
        "info": {
            "year": "2019",
            "episodes": "37",
            "synopsis": {
                "en": "Two geniuses try to make the other confess their love first.",
                "fr": "Deux g\u00e9nies tentent de forcer l'autre \u00e0 d\u00e9clarer sa flamme en premier."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/f2HPuRsgpLclNNgZwUtY2kL6lXo.jpg",
            "https://image.tmdb.org/t/p/w500/tvemh1UGxnDKWPFYj40Zs6IWN7y.jpg",
            "https://image.tmdb.org/t/p/w500/urzSiR7IiImAzyq2VyOJ1BtNChY.jpg",
            "https://image.tmdb.org/t/p/w500/liR8ghAr9Ob1kExlvMGY7F10fSS.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/wFfqL1uWfcUGynbWm7y50PhWtxy.jpg"
    },
    {
        "id": "53",
        "names": {
            "original": "Seven Deadly Sins",
            "en": "The Seven Deadly Sins",
            "fr": "Seven Deadly Sins"
        },
        "info": {
            "year": "2014",
            "episodes": "100",
            "synopsis": {
                "en": "Princess Elizabeth seeks out the Seven Deadly Sins to save her kingdom.",
                "fr": "La princesse Elizabeth cherche les Seven Deadly Sins pour sauver son royaume."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/rCKXeHecw3Lcnv0Ffo6zl2vcfF4.jpg",
            "https://image.tmdb.org/t/p/w500/vBFLcIoWcdRXD8fgfnEDrhQ6zoy.jpg",
            "https://image.tmdb.org/t/p/w500/s2OF6MH5qXpqmVWckmHgTn4QXDG.jpg",
            "https://image.tmdb.org/t/p/w500/6L8PtbWvCg8bZXPB15UB58wbnKU.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/dGY7HkG4Qu3Dq3PssiacTXPaKlC.jpg"
    },
    {
        "id": "54",
        "names": {
            "original": "Fire Force",
            "en": "Fire Force",
            "fr": "Fire Force"
        },
        "info": {
            "year": "2019",
            "episodes": "48",
            "synopsis": {
                "en": "Firefighters battle spontaneous human combustion.",
                "fr": "Des pompiers combattent la combustion humaine spontan\u00e9e."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/oEQ7HvcTRBwne9aTBvBZz3Swokw.jpg",
            "https://image.tmdb.org/t/p/w500/yBwAk5B5ldwvAt80kzUt7UL9Gzf.jpg",
            "https://image.tmdb.org/t/p/w500/idbRkHYTOgEPaxSSO9e5QGQGpIN.jpg",
            "https://image.tmdb.org/t/p/w500/eihSpdcgQhj83CtNnfTaQhwlwQx.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/uqXTeRohyYzB7WMTZ6iSiN4rDuG.jpg"
    },
    {
        "id": "55",
        "names": {
            "original": "Hokuto no Ken",
            "en": "Fist of the North Star",
            "fr": "Ken le Survivant"
        },
        "info": {
            "year": "1984",
            "episodes": "152",
            "synopsis": {
                "en": "A martial artist wanders a post-apocalyptic wasteland.",
                "fr": "Un expert en arts martiaux erre dans un monde post-apocalyptique."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/pk6KucyhLpvGnyd3Lkp7tNx9Y2b.jpg",
            "https://image.tmdb.org/t/p/w500/8Lv6YKpP12AUalXkBzJb7Mg2sRd.jpg",
            "https://image.tmdb.org/t/p/w500/p51Q7WWJ8r8Cg90aStDL9u3T9Mp.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/p51Q7WWJ8r8Cg90aStDL9u3T9Mp.jpg"
    },
    {
        "id": "56",
        "names": {
            "original": "Tengen Toppa Gurren Lagann",
            "en": "Gurren Lagann",
            "fr": "Gurren Lagann"
        },
        "info": {
            "year": "2007",
            "episodes": "27",
            "synopsis": {
                "en": "Humans living underground rise up to claim the surface.",
                "fr": "Des humains vivant sous terre se soul\u00e8vent pour conqu\u00e9rir la surface."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/dvezlnPBAVjfjUnTyqzEvoDJ7ps.jpg",
            "https://image.tmdb.org/t/p/w500/xoxffO2AofRRlQMzI9i1Ugbvyt9.jpg",
            "https://image.tmdb.org/t/p/w500/ndODBgYx1WCQMIPSiLfdWNRWuz9.jpg",
            "https://image.tmdb.org/t/p/w500/1KNHEhMTzQoQnCco0lTOEsTYRtT.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/nNUdPK4Oig6p3S4ElI8wUQ3jRPP.jpg"
    },
    {
        "id": "57",
        "names": {
            "original": "Black Butler",
            "en": "Black Butler",
            "fr": "Black Butler"
        },
        "info": {
            "year": "2008",
            "episodes": "46",
            "synopsis": {
                "en": "A young boy makes a deal with a demon butler.",
                "fr": "Un jeune gar\u00e7on passe un pacte avec un majordome d\u00e9mon."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/cniUanyl6zy6ANDTbKibVQRXpCV.jpg",
            "https://image.tmdb.org/t/p/w500/iNEjbvv39JClQgU4soz7K3kXqHZ.jpg",
            "https://image.tmdb.org/t/p/w500/dnNITMDud9MyfGOgppApA7BTgzQ.jpg",
            "https://image.tmdb.org/t/p/w500/uvRy7qkQ3G11w95rNsKjvByR7MP.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/xlX9TBPX0Dlz5Y15FY6yCCcotAc.jpg"
    },
    {
        "id": "58",
        "names": {
            "original": "Soul Eater",
            "en": "Soul Eater",
            "fr": "Soul Eater"
        },
        "info": {
            "year": "2008",
            "episodes": "51",
            "synopsis": {
                "en": "Students at a special academy hunt evil souls.",
                "fr": "Les \u00e9l\u00e8ves d'une acad\u00e9mie sp\u00e9ciale chassent les \u00e2mes mal\u00e9fiques."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/yOkNYWCOWLh3HFtUlo3QT1g5pHG.jpg",
            "https://image.tmdb.org/t/p/w500/aonNZnjvjx37U16Aq2sCpUlUhYW.jpg",
            "https://image.tmdb.org/t/p/w500/iNCuLWIUhM3m0zK8ibQHBiW2J7M.jpg",
            "https://image.tmdb.org/t/p/w500/rDQ9qPVVuvQAfeHuadWPmJlcVV6.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/pf2PZphQAymKmEPo9XdPPE0a9cK.jpg"
    },
    {
        "id": "59",
        "names": {
            "original": "The Promised Neverland",
            "en": "The Promised Neverland",
            "fr": "The Promised Neverland"
        },
        "info": {
            "year": "2019",
            "episodes": "23",
            "synopsis": {
                "en": "Children try to escape from a sinister orphanage.",
                "fr": "Des enfants tentent de s'\u00e9chapper d'un orphelinat sinistre."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/64GwfkdTJDlLrWVyj8DtgSRi0iX.jpg",
            "https://image.tmdb.org/t/p/w500/g4eZcpty4s28ngMc8g3AxnxQbsh.jpg",
            "https://image.tmdb.org/t/p/w500/4IrfDZCfx2LnwEHdYZJ952KvwWX.jpg",
            "https://image.tmdb.org/t/p/w500/8q9m5uvdWdqDvDbKiiC90a4IyWe.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/zTNsCRFjWaBxM6Ca5c510e1ewPo.jpg"
    },
    {
        "id": "60",
        "names": {
            "original": "Psycho-Pass",
            "en": "Psycho-Pass",
            "fr": "Psycho-Pass"
        },
        "info": {
            "year": "2012",
            "episodes": "41",
            "synopsis": {
                "en": "A future where the police can measure a person's mental state.",
                "fr": "Un futur o\u00f9 la police peut mesurer l'\u00e9tat mental d'une personne."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/q27I6D79I3CwztM02Z6nSXHMhJp.jpg",
            "https://image.tmdb.org/t/p/w500/hLWuBYxTXDhlDbTGpKbTSwupRHX.jpg",
            "https://image.tmdb.org/t/p/w500/6qSOTDubiVdKk85Mf7ItcH3B8Q.jpg",
            "https://image.tmdb.org/t/p/w500/dy3LwY283mhrhjCYTINJC0Hni4r.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/oVfTwvfRBWPlpkIDg5GqgjoMTLr.jpg"
    },
    {
        "id": "61",
        "names": {
            "original": "Blue Exorcist",
            "en": "Blue Exorcist",
            "fr": "Blue Exorcist"
        },
        "info": {
            "year": "2011",
            "episodes": "37",
            "synopsis": {
                "en": "The son of Satan decides to become an exorcist.",
                "fr": "Le fils de Satan d\u00e9cide de devenir un exorciste."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/g2RmOH0cDET7pptUrLnzVM6w8DJ.jpg",
            "https://image.tmdb.org/t/p/w500/dYsPea2o7Pd1PLDDngo5STNNRR9.jpg",
            "https://image.tmdb.org/t/p/w500/56M6i3Xo3kCIR8O6LB9j5pgEgpc.jpg",
            "https://image.tmdb.org/t/p/w500/oOhqq2I69b9OdjMhFVz72sCdyko.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/tWGZRyIrX3CTWU7UuImur7zj4LY.jpg"
    },
    {
        "id": "62",
        "names": {
            "original": "Made in Abyss",
            "en": "Made in Abyss",
            "fr": "Made in Abyss"
        },
        "info": {
            "year": "2017",
            "episodes": "25",
            "synopsis": {
                "en": "A girl explores a giant hole in the earth to find her mother.",
                "fr": "Une fille explore un trou g\u00e9ant pour retrouver sa m\u00e8re."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/zMq1PbgwlNk2Se2QC69ljvXKMM9.jpg",
            "https://image.tmdb.org/t/p/w500/7BJmoi2pzqzhV4TmXlwEdeWpwZ5.jpg",
            "https://image.tmdb.org/t/p/w500/n30CBH4BoN5Z34tCpOWIPGJYOaS.jpg",
            "https://image.tmdb.org/t/p/w500/ysVP9tMW5TiRJ00nNTunl9VCdEd.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/vHjuw61vrlA1P2EeYoYjMi5pNdQ.jpg"
    },
    {
        "id": "63",
        "names": {
            "original": "Overlord",
            "en": "Overlord",
            "fr": "Overlord"
        },
        "info": {
            "year": "2015",
            "episodes": "52",
            "synopsis": {
                "en": "A gamer is trapped in his character's body in a fantasy world.",
                "fr": "Un joueur est pi\u00e9g\u00e9 dans le corps de son personnage dans un monde fantastique."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/yeAfnQqRC9q4zub5iVhzCkwCnRk.jpg",
            "https://image.tmdb.org/t/p/w500/zl2sNVBomRAs2bGDJfFTpo2795l.jpg",
            "https://image.tmdb.org/t/p/w500/vSmn7rf3selodML5W7gqYUnFzWo.jpg",
            "https://image.tmdb.org/t/p/w500/t4zc6DIPDg035Tu946v4qn4HJV2.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/q2a1JQRUQdmsBZDY4aWcMdCVw0d.jpg"
    },
    {
        "id": "64",
        "names": {
            "original": "That Time I Got Reincarnated as a Slime",
            "en": "TenSura",
            "fr": "Moi quand je me r\u00e9incarne en Slime"
        },
        "info": {
            "year": "2018",
            "episodes": "60+",
            "synopsis": {
                "en": "A man is killed and reborn as a powerful slime.",
                "fr": "Un homme meurt et rena\u00eet sous la forme d'un puissant slime."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/iwax8GY1Ino87osl077vHycCeg1.jpg",
            "https://image.tmdb.org/t/p/w500/dSVNxJdONqYRd4XR4jBrGLsYY1C.jpg",
            "https://image.tmdb.org/t/p/w500/gFhXgBO6W6c7W5AIIVqXNYvkuTq.jpg",
            "https://image.tmdb.org/t/p/w500/zDwXZVJaV1KiIkrqnxtUHWd0g4J.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/dSVNxJdONqYRd4XR4jBrGLsYY1C.jpg"
    },
    {
        "id": "65",
        "names": {
            "original": "Akame ga Kill!",
            "en": "Akame ga Kill!",
            "fr": "Akame ga Kill!"
        },
        "info": {
            "year": "2014",
            "episodes": "24",
            "synopsis": {
                "en": "A country boy joins a group of assassins to fight corruption.",
                "fr": "Un campagnard rejoint un groupe d'assassins pour combattre la corruption."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/5LbKHTTMWO2VepdPt4i4haPViww.jpg",
            "https://image.tmdb.org/t/p/w500/yrpHKYrMFtLa6K7Q9llmosmQmzw.jpg",
            "https://image.tmdb.org/t/p/w500/hDzm2VXxdeK5kztUN3RWTkBsBZg.jpg",
            "https://image.tmdb.org/t/p/w500/3Jtt3UgwtjJHRFDWZBFwaOji9F.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/hDzm2VXxdeK5kztUN3RWTkBsBZg.jpg"
    },
    {
        "id": "66",
        "names": {
            "original": "Kill la Kill",
            "en": "Kill la Kill",
            "fr": "Kill la Kill"
        },
        "info": {
            "year": "2013",
            "episodes": "24",
            "synopsis": {
                "en": "A girl searches for her father's killer using a sentient uniform.",
                "fr": "Une fille cherche le tueur de son p\u00e8re avec un uniforme vivant."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/2iUXVqru7zsZH3e3YbGeeaKsQRK.jpg",
            "https://image.tmdb.org/t/p/w500/39qghocDNZGAJlBsvglt1OSkLUf.jpg",
            "https://image.tmdb.org/t/p/w500/8iwoPdmG0f9ouuWU7uvPp6GVtuO.jpg",
            "https://image.tmdb.org/t/p/w500/p5k92EY8HmkQvS88Jn3vZ7VilJr.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/qjFD8sfh7SAMZenCBpPVK7rw8Xg.jpg"
    },
    {
        "id": "67",
        "names": {
            "original": "Drifters",
            "en": "Drifters",
            "fr": "Drifters"
        },
        "info": {
            "year": "2016",
            "episodes": "12",
            "synopsis": {
                "en": "Historical warriors are transported to a fantasy world.",
                "fr": "Des guerriers historiques sont transport\u00e9s dans un monde fantastique."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/oBAPeNMnJ5MXwGkqbHY7fnN3arR.jpg",
            "https://image.tmdb.org/t/p/w500/xCR4gIXcvFZCGdYJ4BJ9sWXdj3V.jpg",
            "https://image.tmdb.org/t/p/w500/niWrad5GEiReGUq6qrBZCTr5OTQ.jpg",
            "https://image.tmdb.org/t/p/w500/9M7npjL11GABW2HecZxSoBOWhpT.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/niWrad5GEiReGUq6qrBZCTr5OTQ.jpg"
    },
    {
        "id": "68",
        "names": {
            "original": "Banana Fish",
            "en": "Banana Fish",
            "fr": "Banana Fish"
        },
        "info": {
            "year": "2018",
            "episodes": "24",
            "synopsis": {
                "en": "A young gang leader investigates a mysterious drug.",
                "fr": "Un jeune chef de gang enqu\u00eate sur une drogue myst\u00e9rieuse."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/ci7jTekDFEx6U48XUCl3vBMdrns.jpg",
            "https://image.tmdb.org/t/p/w500/1UV5di9UIXwrpCW3xQ4RNli5hEV.jpg",
            "https://image.tmdb.org/t/p/w500/m3KUHmPFYGcfonmli0K9A1yqrx1.jpg",
            "https://image.tmdb.org/t/p/w500/1PPK7iWxb2Ylis96LisAsd4vle4.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/6s5WYBvpSPfuEEOj3RlqLWfR7NC.jpg"
    },
    {
        "id": "69",
        "names": {
            "original": "Dororo",
            "en": "Dororo",
            "fr": "Dororo"
        },
        "info": {
            "year": "2019",
            "episodes": "24",
            "synopsis": {
                "en": "A young man hunts demons to reclaim his body parts.",
                "fr": "Un jeune homme chasse des d\u00e9mons pour r\u00e9cup\u00e9rer les parties de son corps."
            }
        },
        "images": [
            "https://placeholder.com/img69.jpg",
            "https://placeholder.com/img69.jpg",
            "https://placeholder.com/img69.jpg",
            "https://placeholder.com/img69.jpg"
        ],
        "vignette": "https://placeholder.com/v69.jpg"
    },
    {
        "id": "70",
        "names": {
            "original": "Erased",
            "en": "Erased",
            "fr": "Erased"
        },
        "info": {
            "year": "2016",
            "episodes": "12",
            "synopsis": {
                "en": "A man travels back in time to prevent a kidnapping.",
                "fr": "Un homme voyage dans le temps pour emp\u00eacher un enl\u00e8vement."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/42OvgvP795xTfVINk48PAYWEFt7.jpg",
            "https://image.tmdb.org/t/p/w500/faCKIohiLWpyAVFsyeCj3za915b.jpg",
            "https://image.tmdb.org/t/p/w500/wqdLNNT2FRne9bYEn1oMQciSTTy.jpg",
            "https://image.tmdb.org/t/p/w500/AvBWXP31DQIdhpMGJtaVKedMQXS.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/ks4JoQPgYwm9BZ02uMHdTea2o8.jpg"
    },
    {
        "id": "71",
        "names": {
            "original": "Fruits Basket",
            "en": "Fruits Basket",
            "fr": "Fruits Basket"
        },
        "info": {
            "year": "2019",
            "episodes": "63",
            "synopsis": {
                "en": "A girl lives with a family cursed by the Chinese Zodiac.",
                "fr": "Une fille vit avec une famille maudite par le zodiaque chinois."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/cia7jLr2deyXqYh0QuAd1cpg7n9.jpg",
            "https://image.tmdb.org/t/p/w500/xdqhbirSCaGaJbaUIcU1ASlS2ti.jpg",
            "https://image.tmdb.org/t/p/w500/jQECJTsrgraoo6wt81qZWe8wBI4.jpg",
            "https://image.tmdb.org/t/p/w500/bvE9TkoKDjITjMAFUHLUAJzD3JS.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/wVe8vcSqpJjLib5TWer6kgkGjjM.jpg"
    },
    {
        "id": "72",
        "names": {
            "original": "Hellsing",
            "en": "Hellsing",
            "fr": "Hellsing"
        },
        "info": {
            "year": "2001",
            "episodes": "13",
            "synopsis": {
                "en": "Vampires vs the Hellsing Organization.",
                "fr": "Vampires contre l'organisation Hellsing."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/mz5L2zlZuMlQwVE8Yxvb2YK1wsl.jpg",
            "https://image.tmdb.org/t/p/w500/7CexQgPkGXLo4a1yvmsCc1H55fM.jpg",
            "https://image.tmdb.org/t/p/w500/bywx1Ps4zG5CPaAnHQCmtiuGzpM.jpg",
            "https://image.tmdb.org/t/p/w500/mYdrjworYUN16fzEr7q1HhJhMzi.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/64urqxuVMALW2PTA7NmDwVdGE7v.jpg"
    },
    {
        "id": "73",
        "names": {
            "original": "Baccano!",
            "en": "Baccano!",
            "fr": "Baccano!"
        },
        "info": {
            "year": "2007",
            "episodes": "13",
            "synopsis": {
                "en": "Alchemists and gangsters clash on a train across America.",
                "fr": "Alchimistes et gangsters s'affrontent dans un train \u00e0 travers l'Am\u00e9rique."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/sAWcmbnYT8LtZke2YbngdrEv4AG.jpg",
            "https://image.tmdb.org/t/p/w500/4ZqyLkK3l2nNk0sQt3NW29UX1GW.jpg",
            "https://image.tmdb.org/t/p/w500/qOxUTQAOTrMKTHuC9HQZiVsTK0F.jpg",
            "https://image.tmdb.org/t/p/w500/eIgvrVBRNSb0DmFbn0DwO7a8k6W.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/1KqLXDpJJaNV6WPoubZwW9QTaVj.jpg"
    },
    {
        "id": "74",
        "names": {
            "original": "Durarara!!",
            "en": "Durarara!!",
            "fr": "Durarara!!"
        },
        "info": {
            "year": "2010",
            "episodes": "60",
            "synopsis": {
                "en": "Strange events happen in the district of Ikebukuro.",
                "fr": "D'\u00e9tranges \u00e9v\u00e9nements se produisent dans le quartier d'Ikebukuro."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/AoOn8MjaKmebr5B3xnVvpufSVTs.jpg",
            "https://image.tmdb.org/t/p/w500/cPhrBI4uw4TXj6x91IlYInS8Qkx.jpg",
            "https://image.tmdb.org/t/p/w500/jgN0oNoxSt1fVPNWfb7raVNnfOP.jpg",
            "https://image.tmdb.org/t/p/w500/xF72IbDjtOvepwtVKeuUBnGg7Ff.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/cPhrBI4uw4TXj6x91IlYInS8Qkx.jpg"
    },
    {
        "id": "75",
        "names": {
            "original": "Fate/Zero",
            "en": "Fate/Zero",
            "fr": "Fate/Zero"
        },
        "info": {
            "year": "2011",
            "episodes": "25",
            "synopsis": {
                "en": "Mages fight for the Holy Grail.",
                "fr": "Des mages se battent pour le Saint Graal."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/rRseegZHHYwc7UdIooY9qjEObRi.jpg",
            "https://image.tmdb.org/t/p/w500/l6UO4qEHwUdjPyavbP6yGA06cS3.jpg",
            "https://image.tmdb.org/t/p/w500/61IqsMDyXRDzhpdytrP41a4c5hH.jpg",
            "https://image.tmdb.org/t/p/w500/qwThyBsQrl2HOZcr2nwMznqq8MZ.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/49Xq27uA9WI2wIsUpZh6ifbf2hq.jpg"
    },
    {
        "id": "76",
        "names": {
            "original": "Fate/stay night",
            "en": "Fate/stay night",
            "fr": "Fate/stay night"
        },
        "info": {
            "year": "2014",
            "episodes": "26",
            "synopsis": {
                "en": "Students participate in the Holy Grail War.",
                "fr": "Des \u00e9tudiants participent \u00e0 la guerre du Saint Graal."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/1ML8CbFRWI16hZUCliMBYj97TxL.jpg",
            "https://image.tmdb.org/t/p/w500/n3ORxz5NzO0DOl2N0xeeQbkDlyz.jpg",
            "https://image.tmdb.org/t/p/w500/eIkgmQyii8n2OeXcVYlWYLY7mm9.jpg",
            "https://image.tmdb.org/t/p/w500/kXYRTLaLJO7iChQuc7qHEw2D55G.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/avUieklqhyIuNAmGkNiawDaVmpV.jpg"
    },
    {
        "id": "77",
        "names": {
            "original": "Hell's Paradise",
            "en": "Jigokuraku",
            "fr": "Hell's Paradise"
        },
        "info": {
            "year": "2023",
            "episodes": "13",
            "synopsis": {
                "en": "Convicts are sent to a dangerous island to find an elixir.",
                "fr": "Des condamn\u00e9s sont envoy\u00e9s sur une \u00eele dangereuse pour trouver un \u00e9lixir."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/6OZMQs6b0XflS1w6aewqggemIfE.jpg",
            "https://image.tmdb.org/t/p/w500/phGPT1asxWXdgp3hoFjbvAl723h.jpg",
            "https://image.tmdb.org/t/p/w500/hYHXIqdi8bmbU7oZqgu9GW8hm8j.jpg",
            "https://image.tmdb.org/t/p/w500/8UNgKM2DLJz18k0hMPDd6707Vkp.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/sq1wEYSf0eEgPd9odxyWovmlnqY.jpg"
    },
    {
        "id": "78",
        "names": {
            "original": "Ranking of Kings",
            "en": "Ousama Ranking",
            "fr": "Ranking of Kings"
        },
        "info": {
            "year": "2021",
            "episodes": "23",
            "synopsis": {
                "en": "A deaf and weak prince strives to become a great king.",
                "fr": "Un prince sourd et faible s'efforce de devenir un grand roi."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/6enNnYNCg5rmWSm7gbs5rzTr5aB.jpg",
            "https://image.tmdb.org/t/p/w500/gaK5RosxmhRAtE2sX757dyICLJM.jpg",
            "https://image.tmdb.org/t/p/w500/A7RbddunkpZAQQGhiV1FiZRYNYy.jpg",
            "https://image.tmdb.org/t/p/w500/qQD4jAiBeZjk60702m8olwu7hiC.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/gek3EIatXDqwSKVTug4vTDuXp6F.jpg"
    },
    {
        "id": "79",
        "names": {
            "original": "Golden Kamuy",
            "en": "Golden Kamuy",
            "fr": "Golden Kamuy"
        },
        "info": {
            "year": "2018",
            "episodes": "49",
            "synopsis": {
                "en": "A veteran hunts for hidden Ainu gold in Hokkaido.",
                "fr": "Un v\u00e9t\u00e9ran cherche de l'or cach\u00e9 A\u00efnou \u00e0 Hokkaido."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/vPgnYVnLR5SCpwfxi884MkrjE9C.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/vPgnYVnLR5SCpwfxi884MkrjE9C.jpg"
    },
    {
        "id": "80",
        "names": {
            "original": "The Rising of the Shield Hero",
            "en": "Tate no Yuusha",
            "fr": "The Rising of the Shield Hero"
        },
        "info": {
            "year": "2019",
            "episodes": "50+",
            "synopsis": {
                "en": "A man summoned to another world with only a shield.",
                "fr": "Un homme invoqu\u00e9 dans un autre monde avec seulement un bouclier."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/urFG2h9T0Do7BbsBd8rvKYxeM4c.jpg",
            "https://image.tmdb.org/t/p/w500/6OjTPkZxNn8IsJPXUzLbyacNqYO.jpg",
            "https://image.tmdb.org/t/p/w500/89rYqHYEExXVLcOKUZRBYXkT64N.jpg",
            "https://image.tmdb.org/t/p/w500/uER5ckH8FYdDo2Ns1VF44eYz39C.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/urFG2h9T0Do7BbsBd8rvKYxeM4c.jpg"
    },
    {
        "id": "81",
        "names": {
            "original": "Log Horizon",
            "en": "Log Horizon",
            "fr": "Log Horizon"
        },
        "info": {
            "year": "2013",
            "episodes": "62",
            "synopsis": {
                "en": "Gamers are trapped in an MMORPG and build a society.",
                "fr": "Des joueurs sont pi\u00e9g\u00e9s dans un MMORPG et b\u00e2tissent une soci\u00e9t\u00e9."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/c5VQNqQAOTGBx0yxEpSM7DBo0BJ.jpg",
            "https://image.tmdb.org/t/p/w500/vrCAD2KvtGJPwABIPd4z0gChi4g.jpg",
            "https://image.tmdb.org/t/p/w500/wo8kQsAZZJNV8lEv9i3EyivPyBK.jpg",
            "https://image.tmdb.org/t/p/w500/f6WzZQVoCSn7W1kmr1UhSToRi2y.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/73bAnTfBQpgIN7EBinQhnlZViM2.jpg"
    },
    {
        "id": "82",
        "names": {
            "original": "No Game No Life",
            "en": "No Game No Life",
            "fr": "No Game No Life"
        },
        "info": {
            "year": "2014",
            "episodes": "12",
            "synopsis": {
                "en": "Two shut-in siblings are transported to a world of games.",
                "fr": "Deux fr\u00e8res et s\u0153urs reclus sont transport\u00e9s dans un monde de jeux."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/yBXWe0RGNY5TIMb5gE4nZPWc2WH.jpg",
            "https://image.tmdb.org/t/p/w500/8kObzQFV8sDVbvPQmgK39wfeiqR.jpg",
            "https://image.tmdb.org/t/p/w500/u9U6Efar78202aimHG36odnriLp.jpg",
            "https://image.tmdb.org/t/p/w500/1OKmuCk18FnOOM1psmLr6ND1uYb.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/1OKmuCk18FnOOM1psmLr6ND1uYb.jpg"
    },
    {
        "id": "83",
        "names": {
            "original": "Noragami",
            "en": "Noragami",
            "fr": "Noragami"
        },
        "info": {
            "year": "2014",
            "episodes": "25",
            "synopsis": {
                "en": "A minor god seeks to have his own shrine.",
                "fr": "Un dieu mineur cherche \u00e0 avoir son propre sanctuaire."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/44UtbM8qtQOW3n5nF49XcCb2jE8.jpg",
            "https://image.tmdb.org/t/p/w500/puEt04rHd4CRKHQOqqoiQy60BJG.jpg",
            "https://image.tmdb.org/t/p/w500/eVanAF4IGcH9VJXkPGxCoYPzzmr.jpg",
            "https://image.tmdb.org/t/p/w500/sMZs7G2oTDbmvWWKZvIftk3Y8U6.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/blngqBXbrTZ1mPTxxaRfpl1XZV2.jpg"
    },
    {
        "id": "84",
        "names": {
            "original": "D.Gray-man",
            "en": "D.Gray-man",
            "fr": "D.Gray-man"
        },
        "info": {
            "year": "2006",
            "episodes": "103",
            "synopsis": {
                "en": "Exorcists fight against the Earl of Millennium.",
                "fr": "Des exorcistes luttent contre le Comte Mill\u00e9naire."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/8f12IAAGKmdpo19ZMYISkQ3SKW2.jpg",
            "https://image.tmdb.org/t/p/w500/x4PvVbTuxweLcEu1SI1alDK9noh.jpg",
            "https://image.tmdb.org/t/p/w500/2eszNvWY3XDEGq47jILdSBssNCC.jpg",
            "https://image.tmdb.org/t/p/w500/sCud9dr6nxsY1Oza5SCCb83qNwY.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/jigrmayBGy8j83qwmbgwd9tRTlu.jpg"
    },
    {
        "id": "85",
        "names": {
            "original": "Beelzebub",
            "en": "Beelzebub",
            "fr": "Beelzebub"
        },
        "info": {
            "year": "2011",
            "episodes": "60",
            "synopsis": {
                "en": "A delinquent has to raise the son of the Demon King.",
                "fr": "Un d\u00e9linquant doit \u00e9lever le fils du Roi des D\u00e9mons."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/41QZ3NTTBY3nZcGrkIL1fXbDFBK.jpg",
            "https://image.tmdb.org/t/p/w500/9PrGUIihgaKvZaUPiLVCB8ksZ7M.jpg",
            "https://image.tmdb.org/t/p/w500/zxk9QNBkXV8qt6bIBL9kbDHhF9E.jpg",
            "https://image.tmdb.org/t/p/w500/pKD21lpNb6LzdXi3FfqDirxPGEo.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/n8go4N5GjhBlOwrPlEhT3aSmSaG.jpg"
    },
    {
        "id": "86",
        "names": {
            "original": "Katekyo Hitman Reborn!",
            "en": "Reborn!",
            "fr": "Reborn!"
        },
        "info": {
            "year": "2006",
            "episodes": "203",
            "synopsis": {
                "en": "A loser middle schooler is trained by a baby hitman.",
                "fr": "Un coll\u00e9gien rat\u00e9 est entra\u00een\u00e9 par un b\u00e9b\u00e9 tueur \u00e0 gages."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/pkHMjerpqFp0isZYC12ICQalDt9.jpg",
            "https://image.tmdb.org/t/p/w500/u6gdP5nXQKPyWYLa6f4sDgxZIoc.jpg",
            "https://image.tmdb.org/t/p/w500/k8zsSfWHTQdrwi4Rg2702KGmby2.jpg",
            "https://image.tmdb.org/t/p/w500/2T728h7sUEafTu0wddGz4mEgT1x.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/8ymbnVByWJNau4HiFIasiD61CR4.jpg"
    },
    {
        "id": "87",
        "names": {
            "original": "Trigun",
            "en": "Trigun",
            "fr": "Trigun"
        },
        "info": {
            "year": "1998",
            "episodes": "26",
            "synopsis": {
                "en": "A legendary gunman with a huge bounty on his head.",
                "fr": "Un tireur l\u00e9gendaire avec une \u00e9norme prime sur sa t\u00eate."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/lnHGyyaize0ayICrkBZWiBaFHa5.jpg",
            "https://image.tmdb.org/t/p/w500/gbrCJfixkv8BeHjDddZwBEtKJvf.jpg",
            "https://image.tmdb.org/t/p/w500/5BsurhoZOOjCPu2zLpgFhPMllw9.jpg",
            "https://image.tmdb.org/t/p/w500/gs7n2Ppl9e5PwpHcIubjF5ZgQSk.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/30joqwF3Q3XrVC1dHJZ6uoR90i6.jpg"
    },
    {
        "id": "88",
        "names": {
            "original": "Samurai Champloo",
            "en": "Samurai Champloo",
            "fr": "Samurai Champloo"
        },
        "info": {
            "year": "2004",
            "episodes": "26",
            "synopsis": {
                "en": "Two swordsmen accompany a girl to find a samurai.",
                "fr": "Deux \u00e9p\u00e9istes accompagnent une fille pour trouver un samoura\u00ef."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/croJaOnPo9V8XYjQrZhuyFdcUk1.jpg",
            "https://image.tmdb.org/t/p/w500/miUEhiX0Flaw9awTESraAkvprAA.jpg",
            "https://image.tmdb.org/t/p/w500/5GyxthrZibPhXFGpbu3DBcuE9bD.jpg",
            "https://image.tmdb.org/t/p/w500/nXc6w0aot1PbbnftyNudMvKVEei.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/vBm2Euum9YVTLeYcQk7WJadVpWW.jpg"
    },
    {
        "id": "89",
        "names": {
            "original": "Yu-Gi-Oh!",
            "en": "Yu-Gi-Oh!",
            "fr": "Yu-Gi-Oh!"
        },
        "info": {
            "year": "2000",
            "episodes": "224",
            "synopsis": {
                "en": "A boy plays a card game with magical properties.",
                "fr": "Un gar\u00e7on joue \u00e0 un jeu de cartes aux propri\u00e9t\u00e9s magiques."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/yZpde0ZwKUae2so36GgyVQBls3o.jpg",
            "https://image.tmdb.org/t/p/w500/uv45oHyjuNKssX7xFceuRrq7bAM.jpg",
            "https://image.tmdb.org/t/p/w500/fygQqb7GYlaMNtrRwiDqR0cX5LR.jpg",
            "https://image.tmdb.org/t/p/w500/lVZpDevYCHg9jvMZyqa14nO71bK.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/1bD2JScwOLf7P7jpDRCtnacEwTf.jpg"
    },
    {
        "id": "90",
        "names": {
            "original": "InuYasha",
            "en": "InuYasha",
            "fr": "InuYasha"
        },
        "info": {
            "year": "2000",
            "episodes": "167",
            "synopsis": {
                "en": "A girl is transported to feudal Japan and meets a half-demon.",
                "fr": "Une fille est transport\u00e9e dans le Japon f\u00e9odal et rencontre un demi-d\u00e9mon."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/i0czecpeelTRqW4rL3298Kuo40S.jpg",
            "https://image.tmdb.org/t/p/w500/uoBf1jEo9dbunoOVMwZPa4bOSbr.jpg",
            "https://image.tmdb.org/t/p/w500/oLH3Kt2irpzAPZRFjRn0u3elgIH.jpg",
            "https://image.tmdb.org/t/p/w500/gu2ghckezwOUyfYKZB5dRniliDz.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/mVE1ULmLaYhCkBQPt3JC5xZC6T6.jpg"
    },
    {
        "id": "91",
        "names": {
            "original": "Shaman King",
            "en": "Shaman King",
            "fr": "Shaman King"
        },
        "info": {
            "year": "2001",
            "episodes": "64",
            "synopsis": {
                "en": "Shamans compete in a tournament to become Shaman King.",
                "fr": "Des shamans s'affrontent dans un tournoi pour devenir Shaman King."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/sAaGHo7ww5QMw6lk1ZWYrSPcgI7.jpg",
            "https://image.tmdb.org/t/p/w500/tCELTCDQ8HbJJ3ICckCqmOtFapK.jpg",
            "https://image.tmdb.org/t/p/w500/bGp1G7QS12c7bASKIzOcSZdxiTb.jpg",
            "https://image.tmdb.org/t/p/w500/olJ8IrA0GvHga0GENnOtws2EDkI.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/rrTwMIozSPupdLJxJblyqEtTTKJ.jpg"
    },
    {
        "id": "92",
        "names": {
            "original": "Nana",
            "en": "Nana",
            "fr": "Nana"
        },
        "info": {
            "year": "2006",
            "episodes": "47",
            "synopsis": {
                "en": "Two girls named Nana meet in Tokyo and become friends.",
                "fr": "Deux filles nomm\u00e9es Nana se rencontrent \u00e0 Tokyo et deviennent amies."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/zmjlYqjulc8d04gQbqTbUQBqPWE.jpg",
            "https://image.tmdb.org/t/p/w500/8Rr9cf9cbm1dnsXtzIRoXbtRMS3.jpg",
            "https://image.tmdb.org/t/p/w500/fPSKWD6HDwqNe0C9ALNqKaWy9og.jpg",
            "https://image.tmdb.org/t/p/w500/lhgGAkrpOjiK8neIdixaruC486I.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/AnMyIsr727OY5fnzvtiVWmRzZ13.jpg"
    },
    {
        "id": "93",
        "names": {
            "original": "Paranoia Agent",
            "en": "Paranoia Agent",
            "fr": "Paranoia Agent"
        },
        "info": {
            "year": "2004",
            "episodes": "13",
            "synopsis": {
                "en": "A mysterious boy on skates attacks people in Tokyo.",
                "fr": "Un myst\u00e9rieux gar\u00e7on en rollers attaque les gens dans Tokyo."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/8RRhEYUMxHBrF8DulRXXwnRVfz6.jpg",
            "https://image.tmdb.org/t/p/w500/f8ZPrRKa5qpz1AcX51woSKzD8mx.jpg",
            "https://image.tmdb.org/t/p/w500/jXFs8dFJFx5vaWVWWmxznFMoAWU.jpg",
            "https://image.tmdb.org/t/p/w500/gSof90k9aWFj8Pqe2bt5KFpzujE.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/f8ZPrRKa5qpz1AcX51woSKzD8mx.jpg"
    },
    {
        "id": "94",
        "names": {
            "original": "Terror in Resonance",
            "en": "Zankyou no Terror",
            "fr": "Terror in Resonance"
        },
        "info": {
            "year": "2014",
            "episodes": "11",
            "synopsis": {
                "en": "Two teenagers carry out terrorist attacks to wake up the world.",
                "fr": "Deux adolescents m\u00e8nent des attentats pour r\u00e9veiller le monde."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/wc1PaImHVXIESClpEDwNI1mlYuC.jpg",
            "https://image.tmdb.org/t/p/w500/tsBMwpqhs1S8REhB1eHotKdl8sB.jpg",
            "https://image.tmdb.org/t/p/w500/g7BoudLk86YhRR5awmVHBuzMKFE.jpg",
            "https://image.tmdb.org/t/p/w500/daPw7Ys5rET0YFafZyVZ7SSyOhX.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/cUmUF9DEgbNCsbEbgmDP6bg8ZOF.jpg"
    },
    {
        "id": "95",
        "names": {
            "original": "March Comes in Like a Lion",
            "en": "Sangatsu no Lion",
            "fr": "March Comes in Like a Lion"
        },
        "info": {
            "year": "2016",
            "episodes": "44",
            "synopsis": {
                "en": "A professional shogi player deals with loneliness.",
                "fr": "Un joueur pro de shogi fait face \u00e0 la solitude."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/8yUNJd2YxuqxjbzomJVI29jYG1b.jpg",
            "https://image.tmdb.org/t/p/w500/xex1iyAmJO9JdlmviMRhFT6E9d1.jpg",
            "https://image.tmdb.org/t/p/w500/rilExEAhWbLRuip8ZZYBBz5GY7b.jpg",
            "https://image.tmdb.org/t/p/w500/mpJRyeukYFmBZMo7NNJwbU3oTad.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/cAUkLrEje5ClXuQRZTialZZhTBm.jpg"
    },
    {
        "id": "96",
        "names": {
            "original": "Given",
            "en": "Given",
            "fr": "Given"
        },
        "info": {
            "year": "2019",
            "episodes": "11",
            "synopsis": {
                "en": "Four students in a rock band deal with love and trauma.",
                "fr": "Quatre \u00e9tudiants d'un groupe de rock g\u00e8rent amour et traumatismes."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/bUPUyWVRiynbtMcHbWSlTquvmbA.jpg",
            "https://image.tmdb.org/t/p/w500/k9YtXrhyT0cr8W5kA1oxga1fiRb.jpg",
            "https://image.tmdb.org/t/p/w500/jsrX650umhno3p2j9nvUlAP4F0Z.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/bUPUyWVRiynbtMcHbWSlTquvmbA.jpg"
    },
    {
        "id": "97",
        "names": {
            "original": "Horimiya",
            "en": "Horimiya",
            "fr": "Horimiya"
        },
        "info": {
            "year": "2021",
            "episodes": "13",
            "synopsis": {
                "en": "Two students discover each other's hidden sides.",
                "fr": "Deux \u00e9tudiants d\u00e9couvrent les facettes cach\u00e9es de l'un et l'autre."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/rzEB0XkY6Jjv5BQqOIGIdu1wfkx.jpg",
            "https://image.tmdb.org/t/p/w500/917VL7zHTaltnEBDrKWVITTsvLy.jpg",
            "https://image.tmdb.org/t/p/w500/lxRLP8nXol4iPWGGJWKYPt2PO8E.jpg",
            "https://image.tmdb.org/t/p/w500/ckEtxj6ADLTDhiFgdcq3iTYZoQb.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/usdcLwzcPZuCvmddDXGd9TzTtju.jpg"
    },
    {
        "id": "98",
        "names": {
            "original": "Witch Hunter Robin",
            "en": "Witch Hunter Robin",
            "fr": "Witch Hunter Robin"
        },
        "info": {
            "year": "2002",
            "episodes": "26",
            "synopsis": {
                "en": "An organization hunts witches using craft.",
                "fr": "Une organisation traque les sorci\u00e8res \u00e0 l'aide de pouvoirs."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/7fJaKBFdXS9ouUWVUMhp4aoe3rM.jpg",
            "https://image.tmdb.org/t/p/w500/hX9Ix2imVmm87MyGIN4I2uCLlXK.jpg",
            "https://image.tmdb.org/t/p/w500/y9ETqHxMWc8IrDtVvRGST3IxafB.jpg",
            "https://image.tmdb.org/t/p/w500/kaJWK1AU9nDNvXji1piS7POW1DK.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/wpf0jWwnXCR75BaOemh8IMd9VAQ.jpg"
    },
    {
        "id": "99",
        "names": {
            "original": "Darker than Black",
            "en": "Darker than Black",
            "fr": "Darker than Black"
        },
        "info": {
            "year": "2007",
            "episodes": "25",
            "synopsis": {
                "en": "Contractors with powers work for hidden syndicates.",
                "fr": "Des contractants dot\u00e9s de pouvoirs travaillent pour des syndicats cach\u00e9s."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/mJzEAXDtAIWzNIIicB9ejhUAGTh.jpg",
            "https://image.tmdb.org/t/p/w500/2X8V715GNyFQi1D7vXAUjfj7kf8.jpg",
            "https://image.tmdb.org/t/p/w500/jt38E29eSAAlabamcs5pwgyY8ee.jpg",
            "https://image.tmdb.org/t/p/w500/rt6PiCkrnrRNsM47OwZ46xkpRwF.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/17jSZG890ykfurbI3f7teeTbFTR.jpg"
    },
    {
        "id": "100",
        "names": {
            "original": "Dorohedoro",
            "en": "Dorohedoro",
            "fr": "Dorohedoro"
        },
        "info": {
            "year": "2020",
            "episodes": "12",
            "synopsis": {
                "en": "A man with a lizard head tries to find the sorcerer who cursed him.",
                "fr": "Un homme \u00e0 t\u00eate de l\u00e9zard cherche le sorcier qui l'a maudit."
            }
        },
        "images": [
            "https://image.tmdb.org/t/p/w500/w4dC34s22qxHO3eOzuYmq1gC9mi.jpg",
            "https://image.tmdb.org/t/p/w500/dkzc01qECJdWEtZw4whZ20CJcH4.jpg",
            "https://image.tmdb.org/t/p/w500/tpOXkPVVYrD7hWTaTbUPGJkfdWb.jpg",
            "https://image.tmdb.org/t/p/w500/iBG0Rlyh2Yte99Ty6qahlU0BpGn.jpg"
        ],
        "vignette": "https://image.tmdb.org/t/p/w500/10iEpQoZTyigpXkOepVSDujdI2N.jpg"
    }
];
