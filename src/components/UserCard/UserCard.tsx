import styles from './UserCard.module.scss'
import { ReactComponent as Location } from '../../assets/icon-location.svg'
import { ReactComponent as Twitter } from '../../assets/icon-twitter.svg'
import { ReactComponent as Company } from '../../assets/icon-company.svg'
import { ReactComponent as Website } from '../../assets/icon-website.svg'
import avatar from '../../assets/Bitmap.svg'
import { User } from '../../api'
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
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
  const { lightMode, modeChanger } = useContext(ThemeContext)

  return (
    <section
      className={styles.userCard}
      style={{
        ...(!lightMode && { boxShadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)' }),
      }}>
      <div className={styles.avatar}>
        <img src={data?.avatar_url} alt="avatar" />
      </div>
      <div className={styles.card}>
        <div className={styles.registration}>
          <div className={styles.avatar_tab}>
            <img src={data?.avatar_url} alt="avatar" />
          </div>
          <div>
            <p className={styles.name}>{data?.name}</p>
            <p className={styles.tag}>@{data?.login}</p>
            <p className={styles.joined}>Joined {transformDate(data?.created_at)}</p>
          </div>

          <p className={styles.joined_tab}>Joined {transformDate(data?.created_at)}</p>
        </div>

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
              <Location fill={data?.location ? 'var(--input_color)' : 'var(--transparentText)'} />
              <p
                style={
                  data?.location
                    ? { color: 'var(--input_color)' }
                    : { color: 'var(--transparentText)' }
                }>
                {data?.location || 'Not Available'}
              </p>
            </div>
            <div className={styles.user_contact}>
              <Website fill={data?.blog ? 'var(--input_color)' : 'var(--transparentText)'} />
              <a
                href={data?.blog}
                className={styles.link}
                style={
                  data?.blog ? { color: 'var(--input_color)' } : { color: 'var(--transparentText)' }
                }>
                {data?.blog || 'Not Available'}
              </a>
            </div>
          </div>

          <div className={styles.user_info_contact}>
            <div className={styles.user_contact}>
              <Twitter
                fill={data?.twitter_username ? 'var(--input_color)' : 'var(--transparentText)'}
              />
              <p
                style={
                  data?.twitter_username
                    ? { color: 'var(--input_color)' }
                    : { color: 'var(--transparentText)' }
                }>
                {data?.twitter_username || 'Not Available'}
              </p>
            </div>

            <div
              className={styles.user_contact}
              style={data?.company ? { color: '--transparentText' } : undefined}>
              <Company fill={data?.company ? 'var(--input_color)' : 'var(--transparentText)'} />
              <p
                style={
                  data?.company
                    ? { color: 'var(--input_color)' }
                    : { color: 'var(--transparentText)' }
                }>
                {data?.company || 'Not Available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserCard
