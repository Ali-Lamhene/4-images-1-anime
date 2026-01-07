import { Alert, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { HINT_COST } from '../constants/game';
import { SHADOWS } from '../constants/shadows';
import { SPACING } from '../constants/spacing';
import { TYPOGRAPHY } from '../constants/typography';

export default function LetterGame({
  animeName,
  selectedLetters,
  availableLetters,
  userCoins,
  onLetterSelect,
  onLetterRemove,
  onHintRequest,
}) {
  const handleHint = () => {
    if (userCoins < HINT_COST) {
      Alert.alert(
        'Pièces insuffisantes',
        `Vous avez besoin de ${HINT_COST} pièces pour obtenir un indice.`,
        [{ text: 'OK' }]
      );
      return;
    }
    onHintRequest();
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `🎮 Devinez cet anime avec moi ! "${animeName}" - 4 Images 1 Anime 🎬\n\nTéléchargez l'app et jouez maintenant !`,
        title: '4 Images 1 Anime',
        url: 'https://yourapp.com', // Remplace par ton lien d'app
      });
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de partager');
    }
  };

  return (
    <View style={styles.container}>
      {/* Remplace le rendu de la zone de réponse pour ne pas créer de placeholder d'espace
          (on applique une marge au conteneur du mot sauf pour le dernier mot) */}
      <View style={styles.answerContainer}>
        {(() => {
          const words = animeName.toUpperCase().split(' ');
          let cursor = 0;
          const nodes = [];

          words.forEach((word, wIdx) => {
            const isLast = wIdx === words.length - 1;

            nodes.push(
              <View
                key={`word-${wIdx}`}
                style={styles.answerWord}
              >
                {word.split('').map((_, j) => {
                  const idx = cursor + j;
                  const letter = selectedLetters[idx];

                  return (
                    <TouchableOpacity
                      key={`ans-${wIdx}-${j}`}
                      style={styles.answerBox}
                      onPress={() => letter && onLetterRemove(idx)}
                    >
                      <Text style={styles.answerLetter}>{letter || ''}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );

            cursor += word.length;
          });

          return nodes;
        })()}
      </View>

      {/* Lettres disponibles et Boutons d'action */}
      <View style={styles.bottomSection}>
        {/* Lettres disponibles */}
        {/* // Remplace le mapping des lettres disponibles pour ne PAS créer de cases vides (lettres utilisées ou espaces) */}
        <View style={styles.lettersContainer}>
          {availableLetters.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.letterBox,
                  item.used && styles.letterBoxUsed,
                ]}
                onPress={() => !item.used && onLetterSelect(item.char, index)}
                disabled={item.used}
              >
                <Text style={styles.letterText}>{item.char}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Boutons d'action (Indice et Partager) */}
        <View style={styles.actionButtonsContainer}>
          {/* Bouton Indice - compact (48x48) */}
          <TouchableOpacity
            style={[
              styles.actionButton,
              styles.actionButtonCompact,
              styles.hintButton,
              userCoins < HINT_COST && styles.actionButtonDisabled,
            ]}
            onPress={handleHint}
            disabled={userCoins < HINT_COST}
          >
            <Text style={[styles.actionButtonIcon, styles.actionButtonIconCompact]}>💡</Text>
          </TouchableOpacity>

          {/* Bouton Partager - compact (48x48) */}
          <TouchableOpacity
            style={[styles.actionButton, styles.actionButtonCompact, styles.shareButton]}
            onPress={handleShare}
          >
            <Text style={[styles.actionButtonIcon, styles.actionButtonIconCompact]}>📤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    flexWrap: 'wrap', // autorise le retour à la ligne
    columnGap: SPACING.xl, // espace horizontal entre mots (pas ajouté en fin de ligne)
    rowGap: SPACING.gapSm, // espace vertical entre les lignes
    marginBottom: SPACING.lg,
  },
  answerWord: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.gapSm,
  },
  answerWordWithSpace: {
    marginRight: SPACING.xl,
  },
  answerSpace: {
    width: SPACING.xl, // espace visible entre les mots
    height: 50,        // même hauteur que answerBox pour un alignement propre
  },
  answerBox: {
    width: 35,
    height: 40,
    backgroundColor: COLORS.accent,
    borderWidth: SPACING.borderMedium,
    borderColor: COLORS.border,
    borderRadius: SPACING.radiusSm,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  answerLetter: {
    fontSize: TYPOGRAPHY.xxl,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.textPrimary,
  },
  // Place les lettres et les boutons d'action côte à côte
  bottomSection: {
    position: 'relative',
    paddingVertical: SPACING.md
  },
  lettersContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: SPACING.gapMd, // utilise le même gap que les images
    paddingRight: 48 + SPACING.gapMd,
  },
  letterBox: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.success,
    borderRadius: SPACING.radiusMd,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  letterBoxUsed: {
    backgroundColor: COLORS.lightGray,
    opacity: 0.4,
  },
  letterText: {
    fontSize: TYPOGRAPHY.xl,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.textPrimary,
  },
  // Colonne à droite pour les boutons d'action (compact)
  actionButtonsContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 48,
    flexDirection: 'column',
    alignItems: 'center',
    gap: SPACING.gapMd, // cohérent avec la grille
    paddingVertical: SPACING.md
  },
  actionButton: {
    width: '100%',
    borderRadius: SPACING.radiusMd,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  // Taille compacte = taille des lettres disponibles
  actionButtonCompact: {
    width: 48,
    height: 48,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  actionButtonDisabled: {
    opacity: 0.5,
  },
  hintButton: {
    backgroundColor: COLORS.warning,
  },
  shareButton: {
    backgroundColor: COLORS.info || '#3B82F6',
  },
  actionButtonIcon: {
    fontSize: TYPOGRAPHY.xxl,
    marginBottom: SPACING.sm,
  },
  // Icône sans marge pour les boutons compacts
  actionButtonIconCompact: {
    marginBottom: 0,
    fontSize: TYPOGRAPHY.xl,
  },
  actionButtonLabel: {
    fontSize: TYPOGRAPHY.md,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  actionButtonCost: {
    fontSize: TYPOGRAPHY.xs,
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
    fontWeight: TYPOGRAPHY.semibold,
  },
  // Masque les libellés/coûts dans la version compacte
  hidden: {
    display: 'none',
  },
});