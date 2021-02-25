import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://lh3.googleusercontent.com/-qaAot4LTlOE/Xzqfzurl10I/AAAAAAAAC4k/pk3PZfjg70ENWGEMYsMXdRfGCXZujUVNACEwYBhgLKtMDAL1Ocqw5mSwB7a6_A6BbJ07dgzwOHYLddwjP8cSXvVcJ53gm0TGUWg3BwrlnM7QH5rf5QWQQTNHjmmmi9QUzFR-tjS4di230midql5pirHw21A2vOzOFXAFZN79rqMWPPy_UWD_i-vhKVaswDn8gA6cugQycyRwL7FAfLh_HkqwDQJYEDIQfDeDq3HjvF-d2vW_27h_4QlQg5C7dPcHmQWUZ5vVb4T_Y3WWrehSgPL8Cx0Gv6SVSeQRiEhyo8seCrbYL7ZNorT2lzRncjhvkkWo8BdThUAZT049D8w3Y0-4_OLJAy5KEQ1O_KXhVyMgYo6zWFxK2M5IDYojmSLjSAlE1wmRWWdH3m4sCcPj4rtVoCsNkoKvBw6RokKJ1XAqmWxr9moMLbSyjI6zlujfgbv6Fs1I29a_ba9TNs9OSi_O1aZ2-v55dgFnR1AiuIwtsP6RbVb_OQ11lqTdLFcQ6rGVsYySMRVEKteksOl1S_38FdNS-6txffYMoMTpcgWsnJCNR8_KFB47iJNsbp00tspSVR3Xv-XbiqoWEJnYvu8Fb1RexiuIElxTDKDD9hirP-UXiKDLOlhNOk_DMbsMjwNsimrnmGU63jWf1nsf0rdAPRMAwypncgQY/w140-h140-p/69296816_108132020562949_5079011321026969600_o.jpg" alt="Henrique Farias" />
            <div>
                <strong>Henrique Farias</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}