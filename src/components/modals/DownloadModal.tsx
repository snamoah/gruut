import 'react-responsive-modal/styles.css'

import Image from 'next/image'
import { saveAs } from 'file-saver'
import { Modal } from 'react-responsive-modal'
import styles from '../../styles/DownloadModal.module.css'

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
  const saveFile = () => {
    const [post] = posts
    const url = post.is_video ? post.video_url : post.display_url
    saveAs(url)
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      showCloseIcon={false}
      classNames={{
        modal: styles.modal,
        overlay: styles.overlay,
      }}
      center
    >
      <div>
        <section className={styles.preview}>
          {posts &&
            posts.map(
              (post, key) =>
                //   post.is_video ? (
                //     <video key={key} src={post.video_url} />
                //   ) : (
                //     <Image key={key} src={post.display_url} layout="fill" />
                //   ),
                null,
            )}
        </section>
        <section className={styles.action}>
          <header>
            {/* <Image src={profileUrl as any} layout="fill" /> */}
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
