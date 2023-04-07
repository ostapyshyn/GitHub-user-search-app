import styles from './UserCard.module.scss'
import location from '../../assets/icon-location.svg'
import company from '../../assets/icon-company.svg'
import twitter from '../../assets/icon-twitter.svg'
import website from '../../assets/icon-website.svg'
import avatar from '../../assets/Bitmap.svg'
import { User } from '../../api'
interface Props {
  data: User | undefined
}

const transformDate = (date: string | undefined) => {
  let joinedString = ''
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let createdAt
  if (date) {
    createdAt = new Date(date)
    joinedString = `${createdAt.getDate()} ${
      monthNames[createdAt.getMonth()]
    } ${createdAt.getFullYear()}`
  }
  return joinedString
}

const UserCard = ({ data }: Props) => {
  return (
    <section className={styles.userCard}>
      <div className={styles.avatar}>
        <img src={data?.avatar_url} alt="avatar" />
      </div>
      <div className={styles.card}>
        <div className={styles.registration}>
          <p className={styles.name}>{data?.name}</p>
          <p className={styles.joined}>Joined {transformDate(data?.created_at)}</p>
        </div>
        <p className={styles.tag}>@{data?.login}</p>

        <p className={styles.bio}>{data?.bio || 'This profile has no bio'}</p>

        <div className={styles.info}>
          <div className={styles.info_about}>
            <p className={styles.info_num}>Repos</p>
            <p className={styles.count}>{data?.public_repos}</p>
          </div>
          <div className={styles.info_about}>
            <p className={styles.info_num}>Followers</p>
            <p className={styles.count}>{data?.followers}</p>
          </div>
          <div className={styles.info_about}>
            <p className={styles.info_num}>Following</p>
            <p className={styles.count}>{data?.following}</p>
          </div>
        </div>
        <div className={styles.user_info}>
          <div className={styles.user_info_contact}>
            <div className={styles.user_contact}>
              <img src={location} alt="location" />
              <p>{data?.location || 'Not Available'}</p>
            </div>
            <div className={styles.user_contact}>
              <img src={website} alt="website" />
              <p className={styles.link}>{data?.blog || 'Not Available'}</p>
            </div>
          </div>
          <div className={styles.user_info_contact}>
            <div className={styles.user_contact}>
              <img src={twitter} alt="twitter" />
              <p>{data?.twitter_username || 'Not Available'}</p>
            </div>

            <div className={styles.user_contact}>
              <img src={company} alt="company" />
              <p>{data?.company || 'Not Available'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserCard
