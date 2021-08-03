import 'react-responsive-modal/styles.css'

import { useState } from 'react'
import Image from 'next/image'
import { saveAs } from 'file-saver'
import { Modal } from 'react-responsive-modal'
import styles from '../../styles/DownloadModal.module.css'
import { proxifyUrl } from '../../utils/url'
import RightArrow from '../icons/RightArrow'
import LeftArrow from '../icons/LeftArrow'

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
  const saveFile = () => {
    const [post] = posts
    const url = proxifyUrl(post.is_video ? post.video_url : post.display_url)
    saveAs(url)
  }

  const post = posts[slideIndex]

  const isLast = slideIndex === posts.length - 1
  const isFirst = slideIndex === 0
  const isCarousel = posts.length > 1

  const onNext = () => setSlideIndex(slideIndex + 1)
  const onPrevious = () => setSlideIndex(slideIndex - 1)

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
              <video controls src={proxifyUrl(post.video_url)} />
            ) : (
              <Image
                unoptimized={true}
                src={proxifyUrl(post.display_url) as any}
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
              src={proxifyUrl(profileUrl)}
              layout="fixed"
              width={40}
              height={40}
            />
            <span>@{username}</span>
          </header>
          <div>
            <button onClick={saveFile}>Download</button>
          </div>
        </section>
      </div>
    </Modal>
  )
}

export default DownloadModal
