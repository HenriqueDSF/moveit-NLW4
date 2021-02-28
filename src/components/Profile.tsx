import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://scontent.frvd2-1.fna.fbcdn.net/v/t1.0-9/69296816_108132020562949_5079011321026969600_o.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHMlpAWs2BqqGvON3EsKgA3GOH5Wy36WXEY4flbLfpZcQ8aDgNGnZYBjtjDdzc0CN6NHqYFry1wDr3pnQRPGRgB&_nc_ohc=YIrVNxuRAI4AX_Vz6_v&_nc_oc=AQnOpXs-r3lVV74g2NXcWyzFAZAovLSGLOJqYqRFBg_JqM88JakFFBoWqGDIDuNLEV8&_nc_ht=scontent.frvd2-1.fna&oh=1d364ce63b64e19b9fa268cdc576e712&oe=6061145D" alt="Henrique Farias" />
            <div>
                <strong>Henrique Farias</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}