import styles from './UserCard.module.scss'

const UserCard = () => {
  return (
    <section className={styles.userCard}>
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
        <div>
          <p>San Francisco</p>
          <p>https://github.blog</p>
          <p>@github</p>
          <p>Not Available</p>
        </div>
      </div>
    </section>
  )
}

export default UserCard
