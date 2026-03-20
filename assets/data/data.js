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
            "https://placeholder.com/img31.jpg",
            "https://placeholder.com/img31.jpg",
            "https://placeholder.com/img31.jpg",
            "https://placeholder.com/img31.jpg"
        ],
        "vignette": "https://placeholder.com/v31.jpg"
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
            "https://placeholder.com/img32.jpg",
            "https://placeholder.com/img32.jpg",
            "https://placeholder.com/img32.jpg",
            "https://placeholder.com/img32.jpg"
        ],
        "vignette": "https://placeholder.com/v32.jpg"
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
            "https://placeholder.com/img33.jpg",
            "https://placeholder.com/img33.jpg",
            "https://placeholder.com/img33.jpg",
            "https://placeholder.com/img33.jpg"
        ],
        "vignette": "https://placeholder.com/v33.jpg"
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
            "https://placeholder.com/img34.jpg",
            "https://placeholder.com/img34.jpg",
            "https://placeholder.com/img34.jpg",
            "https://placeholder.com/img34.jpg"
        ],
        "vignette": "https://placeholder.com/v34.jpg"
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
            "https://placeholder.com/img35.jpg",
            "https://placeholder.com/img35.jpg",
            "https://placeholder.com/img35.jpg",
            "https://placeholder.com/img35.jpg"
        ],
        "vignette": "https://placeholder.com/v35.jpg"
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
            "https://placeholder.com/img36.jpg",
            "https://placeholder.com/img36.jpg",
            "https://placeholder.com/img36.jpg",
            "https://placeholder.com/img36.jpg"
        ],
        "vignette": "https://placeholder.com/v36.jpg"
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
            "https://placeholder.com/img37.jpg",
            "https://placeholder.com/img37.jpg",
            "https://placeholder.com/img37.jpg",
            "https://placeholder.com/img37.jpg"
        ],
        "vignette": "https://placeholder.com/v37.jpg"
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
            "https://placeholder.com/img38.jpg",
            "https://placeholder.com/img38.jpg",
            "https://placeholder.com/img38.jpg",
            "https://placeholder.com/img38.jpg"
        ],
        "vignette": "https://placeholder.com/v38.jpg"
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
            "https://placeholder.com/img39.jpg",
            "https://placeholder.com/img39.jpg",
            "https://placeholder.com/img39.jpg",
            "https://placeholder.com/img39.jpg"
        ],
        "vignette": "https://placeholder.com/v39.jpg"
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
            "https://placeholder.com/img40.jpg",
            "https://placeholder.com/img40.jpg",
            "https://placeholder.com/img40.jpg",
            "https://placeholder.com/img40.jpg"
        ],
        "vignette": "https://placeholder.com/v40.jpg"
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
            "https://placeholder.com/img41.jpg",
            "https://placeholder.com/img41.jpg",
            "https://placeholder.com/img41.jpg",
            "https://placeholder.com/img41.jpg"
        ],
        "vignette": "https://placeholder.com/v41.jpg"
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
            "https://placeholder.com/img42.jpg",
            "https://placeholder.com/img42.jpg",
            "https://placeholder.com/img42.jpg",
            "https://placeholder.com/img42.jpg"
        ],
        "vignette": "https://placeholder.com/v42.jpg"
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
            "https://placeholder.com/img43.jpg",
            "https://placeholder.com/img43.jpg",
            "https://placeholder.com/img43.jpg",
            "https://placeholder.com/img43.jpg"
        ],
        "vignette": "https://placeholder.com/v43.jpg"
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
            "https://placeholder.com/img44.jpg",
            "https://placeholder.com/img44.jpg",
            "https://placeholder.com/img44.jpg",
            "https://placeholder.com/img44.jpg"
        ],
        "vignette": "https://placeholder.com/v44.jpg"
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
            "https://placeholder.com/img45.jpg",
            "https://placeholder.com/img45.jpg",
            "https://placeholder.com/img45.jpg",
            "https://placeholder.com/img45.jpg"
        ],
        "vignette": "https://placeholder.com/v45.jpg"
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
            "https://placeholder.com/img46.jpg",
            "https://placeholder.com/img46.jpg",
            "https://placeholder.com/img46.jpg",
            "https://placeholder.com/img46.jpg"
        ],
        "vignette": "https://placeholder.com/v46.jpg"
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
            "https://placeholder.com/img48.jpg",
            "https://placeholder.com/img48.jpg",
            "https://placeholder.com/img48.jpg",
            "https://placeholder.com/img48.jpg"
        ],
        "vignette": "https://placeholder.com/v48.jpg"
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
            "https://placeholder.com/img49.jpg",
            "https://placeholder.com/img49.jpg",
            "https://placeholder.com/img49.jpg",
            "https://placeholder.com/img49.jpg"
        ],
        "vignette": "https://placeholder.com/v49.jpg"
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
            "https://placeholder.com/img50.jpg",
            "https://placeholder.com/img50.jpg",
            "https://placeholder.com/img50.jpg",
            "https://placeholder.com/img50.jpg"
        ],
        "vignette": "https://placeholder.com/v50.jpg"
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
            "https://placeholder.com/img51.jpg",
            "https://placeholder.com/img51.jpg",
            "https://placeholder.com/img51.jpg",
            "https://placeholder.com/img51.jpg"
        ],
        "vignette": "https://placeholder.com/v51.jpg"
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
            "https://placeholder.com/img52.jpg",
            "https://placeholder.com/img52.jpg",
            "https://placeholder.com/img52.jpg",
            "https://placeholder.com/img52.jpg"
        ],
        "vignette": "https://placeholder.com/v52.jpg"
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
            "https://placeholder.com/img53.jpg",
            "https://placeholder.com/img53.jpg",
            "https://placeholder.com/img53.jpg",
            "https://placeholder.com/img53.jpg"
        ],
        "vignette": "https://placeholder.com/v53.jpg"
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
            "https://placeholder.com/img54.jpg",
            "https://placeholder.com/img54.jpg",
            "https://placeholder.com/img54.jpg",
            "https://placeholder.com/img54.jpg"
        ],
        "vignette": "https://placeholder.com/v54.jpg"
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
            "https://placeholder.com/img55.jpg",
            "https://placeholder.com/img55.jpg",
            "https://placeholder.com/img55.jpg",
            "https://placeholder.com/img55.jpg"
        ],
        "vignette": "https://placeholder.com/v55.jpg"
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
            "https://placeholder.com/img56.jpg",
            "https://placeholder.com/img56.jpg",
            "https://placeholder.com/img56.jpg",
            "https://placeholder.com/img56.jpg"
        ],
        "vignette": "https://placeholder.com/v56.jpg"
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
            "https://placeholder.com/img57.jpg",
            "https://placeholder.com/img57.jpg",
            "https://placeholder.com/img57.jpg",
            "https://placeholder.com/img57.jpg"
        ],
        "vignette": "https://placeholder.com/v57.jpg"
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
            "https://placeholder.com/img58.jpg",
            "https://placeholder.com/img58.jpg",
            "https://placeholder.com/img58.jpg",
            "https://placeholder.com/img58.jpg"
        ],
        "vignette": "https://placeholder.com/v58.jpg"
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
            "https://placeholder.com/img59.jpg",
            "https://placeholder.com/img59.jpg",
            "https://placeholder.com/img59.jpg",
            "https://placeholder.com/img59.jpg"
        ],
        "vignette": "https://placeholder.com/v59.jpg"
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
            "https://placeholder.com/img60.jpg",
            "https://placeholder.com/img60.jpg",
            "https://placeholder.com/img60.jpg",
            "https://placeholder.com/img60.jpg"
        ],
        "vignette": "https://placeholder.com/v60.jpg"
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
            "https://placeholder.com/img61.jpg",
            "https://placeholder.com/img61.jpg",
            "https://placeholder.com/img61.jpg",
            "https://placeholder.com/img61.jpg"
        ],
        "vignette": "https://placeholder.com/v61.jpg"
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
            "https://placeholder.com/img62.jpg",
            "https://placeholder.com/img62.jpg",
            "https://placeholder.com/img62.jpg",
            "https://placeholder.com/img62.jpg"
        ],
        "vignette": "https://placeholder.com/v62.jpg"
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
            "https://placeholder.com/img63.jpg",
            "https://placeholder.com/img63.jpg",
            "https://placeholder.com/img63.jpg",
            "https://placeholder.com/img63.jpg"
        ],
        "vignette": "https://placeholder.com/v63.jpg"
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
            "https://placeholder.com/img64.jpg",
            "https://placeholder.com/img64.jpg",
            "https://placeholder.com/img64.jpg",
            "https://placeholder.com/img64.jpg"
        ],
        "vignette": "https://placeholder.com/v64.jpg"
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
            "https://placeholder.com/img65.jpg",
            "https://placeholder.com/img65.jpg",
            "https://placeholder.com/img65.jpg",
            "https://placeholder.com/img65.jpg"
        ],
        "vignette": "https://placeholder.com/v65.jpg"
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
            "https://placeholder.com/img66.jpg",
            "https://placeholder.com/img66.jpg",
            "https://placeholder.com/img66.jpg",
            "https://placeholder.com/img66.jpg"
        ],
        "vignette": "https://placeholder.com/v66.jpg"
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
            "https://placeholder.com/img67.jpg",
            "https://placeholder.com/img67.jpg",
            "https://placeholder.com/img67.jpg",
            "https://placeholder.com/img67.jpg"
        ],
        "vignette": "https://placeholder.com/v67.jpg"
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
            "https://placeholder.com/img68.jpg",
            "https://placeholder.com/img68.jpg",
            "https://placeholder.com/img68.jpg",
            "https://placeholder.com/img68.jpg"
        ],
        "vignette": "https://placeholder.com/v68.jpg"
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
            "https://placeholder.com/img70.jpg",
            "https://placeholder.com/img70.jpg",
            "https://placeholder.com/img70.jpg",
            "https://placeholder.com/img70.jpg"
        ],
        "vignette": "https://placeholder.com/v70.jpg"
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
            "https://placeholder.com/img71.jpg",
            "https://placeholder.com/img71.jpg",
            "https://placeholder.com/img71.jpg",
            "https://placeholder.com/img71.jpg"
        ],
        "vignette": "https://placeholder.com/v71.jpg"
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
            "https://placeholder.com/img72.jpg",
            "https://placeholder.com/img72.jpg",
            "https://placeholder.com/img72.jpg",
            "https://placeholder.com/img72.jpg"
        ],
        "vignette": "https://placeholder.com/v72.jpg"
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
            "https://placeholder.com/img73.jpg",
            "https://placeholder.com/img73.jpg",
            "https://placeholder.com/img73.jpg",
            "https://placeholder.com/img73.jpg"
        ],
        "vignette": "https://placeholder.com/v73.jpg"
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
            "https://placeholder.com/img74.jpg",
            "https://placeholder.com/img74.jpg",
            "https://placeholder.com/img74.jpg",
            "https://placeholder.com/img74.jpg"
        ],
        "vignette": "https://placeholder.com/v74.jpg"
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
            "https://placeholder.com/img75.jpg",
            "https://placeholder.com/img75.jpg",
            "https://placeholder.com/img75.jpg",
            "https://placeholder.com/img75.jpg"
        ],
        "vignette": "https://placeholder.com/v75.jpg"
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
            "https://placeholder.com/img76.jpg",
            "https://placeholder.com/img76.jpg",
            "https://placeholder.com/img76.jpg",
            "https://placeholder.com/img76.jpg"
        ],
        "vignette": "https://placeholder.com/v76.jpg"
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
            "https://placeholder.com/img77.jpg",
            "https://placeholder.com/img77.jpg",
            "https://placeholder.com/img77.jpg",
            "https://placeholder.com/img77.jpg"
        ],
        "vignette": "https://placeholder.com/v77.jpg"
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
            "https://placeholder.com/img78.jpg",
            "https://placeholder.com/img78.jpg",
            "https://placeholder.com/img78.jpg",
            "https://placeholder.com/img78.jpg"
        ],
        "vignette": "https://placeholder.com/v78.jpg"
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
            "https://placeholder.com/img79.jpg",
            "https://placeholder.com/img79.jpg",
            "https://placeholder.com/img79.jpg",
            "https://placeholder.com/img79.jpg"
        ],
        "vignette": "https://placeholder.com/v79.jpg"
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
            "https://placeholder.com/img80.jpg",
            "https://placeholder.com/img80.jpg",
            "https://placeholder.com/img80.jpg",
            "https://placeholder.com/img80.jpg"
        ],
        "vignette": "https://placeholder.com/v80.jpg"
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
            "https://placeholder.com/img81.jpg",
            "https://placeholder.com/img81.jpg",
            "https://placeholder.com/img81.jpg",
            "https://placeholder.com/img81.jpg"
        ],
        "vignette": "https://placeholder.com/v81.jpg"
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
            "https://placeholder.com/img82.jpg",
            "https://placeholder.com/img82.jpg",
            "https://placeholder.com/img82.jpg",
            "https://placeholder.com/img82.jpg"
        ],
        "vignette": "https://placeholder.com/v82.jpg"
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
            "https://placeholder.com/img83.jpg",
            "https://placeholder.com/img83.jpg",
            "https://placeholder.com/img83.jpg",
            "https://placeholder.com/img83.jpg"
        ],
        "vignette": "https://placeholder.com/v83.jpg"
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
            "https://placeholder.com/img84.jpg",
            "https://placeholder.com/img84.jpg",
            "https://placeholder.com/img84.jpg",
            "https://placeholder.com/img84.jpg"
        ],
        "vignette": "https://placeholder.com/v84.jpg"
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
            "https://placeholder.com/img85.jpg",
            "https://placeholder.com/img85.jpg",
            "https://placeholder.com/img85.jpg",
            "https://placeholder.com/img85.jpg"
        ],
        "vignette": "https://placeholder.com/v85.jpg"
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
            "https://placeholder.com/img86.jpg",
            "https://placeholder.com/img86.jpg",
            "https://placeholder.com/img86.jpg",
            "https://placeholder.com/img86.jpg"
        ],
        "vignette": "https://placeholder.com/v86.jpg"
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
            "https://placeholder.com/img87.jpg",
            "https://placeholder.com/img87.jpg",
            "https://placeholder.com/img87.jpg",
            "https://placeholder.com/img87.jpg"
        ],
        "vignette": "https://placeholder.com/v87.jpg"
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
            "https://placeholder.com/img88.jpg",
            "https://placeholder.com/img88.jpg",
            "https://placeholder.com/img88.jpg",
            "https://placeholder.com/img88.jpg"
        ],
        "vignette": "https://placeholder.com/v88.jpg"
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
            "https://placeholder.com/img89.jpg",
            "https://placeholder.com/img89.jpg",
            "https://placeholder.com/img89.jpg",
            "https://placeholder.com/img89.jpg"
        ],
        "vignette": "https://placeholder.com/v89.jpg"
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
            "https://placeholder.com/img90.jpg",
            "https://placeholder.com/img90.jpg",
            "https://placeholder.com/img90.jpg",
            "https://placeholder.com/img90.jpg"
        ],
        "vignette": "https://placeholder.com/v90.jpg"
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
            "https://placeholder.com/img91.jpg",
            "https://placeholder.com/img91.jpg",
            "https://placeholder.com/img91.jpg",
            "https://placeholder.com/img91.jpg"
        ],
        "vignette": "https://placeholder.com/v91.jpg"
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
            "https://placeholder.com/img92.jpg",
            "https://placeholder.com/img92.jpg",
            "https://placeholder.com/img92.jpg",
            "https://placeholder.com/img92.jpg"
        ],
        "vignette": "https://placeholder.com/v92.jpg"
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
            "https://placeholder.com/img93.jpg",
            "https://placeholder.com/img93.jpg",
            "https://placeholder.com/img93.jpg",
            "https://placeholder.com/img93.jpg"
        ],
        "vignette": "https://placeholder.com/v93.jpg"
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
            "https://placeholder.com/img94.jpg",
            "https://placeholder.com/img94.jpg",
            "https://placeholder.com/img94.jpg",
            "https://placeholder.com/img94.jpg"
        ],
        "vignette": "https://placeholder.com/v94.jpg"
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
            "https://placeholder.com/img95.jpg",
            "https://placeholder.com/img95.jpg",
            "https://placeholder.com/img95.jpg",
            "https://placeholder.com/img95.jpg"
        ],
        "vignette": "https://placeholder.com/v95.jpg"
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
            "https://placeholder.com/img96.jpg",
            "https://placeholder.com/img96.jpg",
            "https://placeholder.com/img96.jpg",
            "https://placeholder.com/img96.jpg"
        ],
        "vignette": "https://placeholder.com/v96.jpg"
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
            "https://placeholder.com/img97.jpg",
            "https://placeholder.com/img97.jpg",
            "https://placeholder.com/img97.jpg",
            "https://placeholder.com/img97.jpg"
        ],
        "vignette": "https://placeholder.com/v97.jpg"
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
            "https://placeholder.com/img98.jpg",
            "https://placeholder.com/img98.jpg",
            "https://placeholder.com/img98.jpg",
            "https://placeholder.com/img98.jpg"
        ],
        "vignette": "https://placeholder.com/v98.jpg"
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
            "https://placeholder.com/img99.jpg",
            "https://placeholder.com/img99.jpg",
            "https://placeholder.com/img99.jpg",
            "https://placeholder.com/img99.jpg"
        ],
        "vignette": "https://placeholder.com/v99.jpg"
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
            "https://placeholder.com/img100.jpg",
            "https://placeholder.com/img100.jpg",
            "https://placeholder.com/img100.jpg",
            "https://placeholder.com/img100.jpg"
        ],
        "vignette": "https://placeholder.com/v100.jpg"
    }
];
