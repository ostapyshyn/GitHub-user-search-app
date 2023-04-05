import styles from './UserCard.module.scss'
import location from '../../assets/icon-location.svg'
import company from '../../assets/icon-company.svg'
import twitter from '../../assets/icon-twitter.svg'
import website from '../../assets/icon-website.svg'
import avatar from '../../assets/Bitmap.svg'

const UserCard = () => {
  return (
    <section className={styles.userCard}>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.card}>
        <div className={styles.registration}>
          <p className={styles.name}>The Octocat</p>
          <p className={styles.joined}>Joined 25 Jan 2011</p>
        </div>
        <p className={styles.tag}>@octocat</p>

        <p className={styles.bio}>This profile has no bio</p>

        <div className={styles.info}>
          <div className={styles.info_about}>
            <p className={styles.info_num}>Repos</p>
            <p className={styles.count}>8</p>
          </div>
          <div className={styles.info_about}>
            <p className={styles.info_num}>Followers</p>
            <p className={styles.count}>3938</p>
          </div>
          <div className={styles.info_about}>
            <p className={styles.info_num}>Following</p>
            <p className={styles.count}>9</p>
          </div>
        </div>
        <div className={styles.user_info}>
          <div className={styles.user_info_contact}>
            <div className={styles.user_contact}>
              <img src={location} alt="location" />
              <p>San Francisco</p>
            </div>
            <div className={styles.user_contact}>
              <img src={website} alt="website" />
              <p className={styles.link}>https://github.blog</p>
            </div>
          </div>
          <div className={styles.user_info_contact}>
            <div className={styles.user_contact}>
              <img src={twitter} alt="twitter" />
              <p>Not Available</p>
            </div>

            <div className={styles.user_contact}>
              <img src={company} alt="company" />
              <p>@github</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserCard
