import { usePathname, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { useTranslation } from '../context/LanguageContext';
import HomeIcon from './icons/HomeIcon';
import ProfileIcon from './icons/ProfileIcon';
import SettingsIcon from './icons/SettingsIcon';

export default function BottomNavBar() {
    const router = useRouter();
    const pathname = usePathname();
    const { t } = useTranslation();

    const isHome = pathname === '/' || pathname === '/index';
    const isProfile = pathname === '/profile';
    const isSettings = pathname === '/settings';

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.navItem}
                onPress={() => router.push('/')}
                activeOpacity={0.7}
            >
                <HomeIcon
                    color={isHome ? COLORS.accent : COLORS.textSecondary}
                    width={22}
                    height={22}
                />
                <Text style={[styles.navText, isHome && styles.activeNavText]}>{t('nav_home')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navItem}
                onPress={() => router.push('/profile')}
                activeOpacity={0.7}
            >
                <ProfileIcon
                    color={isProfile ? COLORS.accent : COLORS.textSecondary}
                    width={22}
                    height={22}
                />
                <Text style={[styles.navText, isProfile && styles.activeNavText]}>{t('nav_profile')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navItem}
                onPress={() => router.push('/settings')}
                activeOpacity={0.7}
            >
                <SettingsIcon
                    color={isSettings ? COLORS.accent : COLORS.textSecondary}
                    width={22}
                    height={22}
                />
                <Text style={[styles.navText, isSettings && styles.activeNavText]}>{t('nav_settings')}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.secondary,
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        elevation: 10,
    },
    navItem: {
        alignItems: 'center',
        gap: 4,
        flex: 1,
    },
    navText: {
        fontSize: 8,
        fontWeight: '500',
        color: COLORS.textSecondary,
        letterSpacing: 1.2,
    },
    activeNavText: {
        color: COLORS.accent,
        fontWeight: '700',
    },
});
