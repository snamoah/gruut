import 'react-responsive-modal/styles.css'

import { MouseEvent, useState } from 'react'
import Image from 'next/image'
import { Modal } from 'react-responsive-modal'
import styles from '../../styles/DownloadModal.module.css'
import { cdn } from '../../utils/url'
import RightArrow from '../icons/RightArrow'
import LeftArrow from '../icons/LeftArrow'
import { saveFile, saveMultipleFiles } from '../../utils/files'
import { trackEvent } from '../../utils/analytics'

interface DownloadModalProps {
  posts: any[]
  username: string
  profileUrl: any
  open: boolean
  onClose: () => void
}

const DownloadModal = ({
  open,
  posts,
  onClose,
  username,
  profileUrl,
}: DownloadModalProps) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  const post = posts[slideIndex]

  const isLast = slideIndex === posts.length - 1
  const isFirst = slideIndex === 0
  const isCarousel = posts.length > 1

  const onNext = () => setSlideIndex(slideIndex + 1)
  const onPrevious = () => setSlideIndex(slideIndex - 1)

  const save = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setLoading(true)
    const urls = posts.map((post) => (post.is_video ? post.video_url : post.display_url))
    setTimeout(async () => {
      try {
        if (!isCarousel) {
          await saveFile(urls[0])
          trackEvent({ action: 'download' })
        } else {
          await saveMultipleFiles(urls, username)
          trackEvent({ action: 'downloadMultiple' })
        }
      } finally {
        setLoading(false)
      }
    }, 0)
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      showCloseIcon={false}
      classNames={{
        modal: `${styles.modal} ${!post.is_video ? styles.imagePreview : ''}`,
        overlay: styles.overlay,
      }}
      center
    >
      <div>
        <section className={styles.preview}>
          <div>
            {post.is_video ? (
              <video controls src={cdn(post.video_url)} />
            ) : (
              <Image
                unoptimized={true}
                src={cdn(post.display_url) as any}
                objectFit="contain"
                layout="fill"
              />
            )}
          </div>
          {isCarousel && !isFirst && (
            <div onClick={onPrevious} className={styles.leftControl}>
              <div>
                <LeftArrow />
              </div>
            </div>
          )}
          {isCarousel && !isLast && (
            <div onClick={onNext} className={styles.rightControl}>
              <div>
                <RightArrow />
              </div>
            </div>
          )}
        </section>
        <section className={styles.action}>
          <header>
            <Image
              unoptimized={true}
              src={cdn(profileUrl)}
              layout="fixed"
              width={40}
              height={40}
            />
            <span>@{username}</span>
          </header>
          <div>
            <button
              className={loading ? styles.disabled : ''}
              disabled={loading}
              onClick={save}
            >
              {loading ? 'Downloading...' : `Download${isCarousel ? ' all' : ''}`}
            </button>
          </div>
        </section>
      </div>
    </Modal>
  )
}

export default DownloadModal
