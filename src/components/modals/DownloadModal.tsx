import 'react-responsive-modal/styles.css'

import Image from 'next/image'
import { saveAs } from 'file-saver'
import { Modal } from 'react-responsive-modal'

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
    <Modal open={open} onClose={onClose} showCloseIcon={false} center>
      <div>
        <div>
          {posts &&
            posts.map((post, key) =>
              post.is_video ? (
                <video key={key} src={post.video_url} />
              ) : (
                <Image key={key} src={post.display_url} />
              ),
            )}
        </div>
        <div>
          <header>
            <Image src={profileUrl as any} layout="fixed" />
            <span>@{username}</span>
          </header>
          <div>
            <button onClick={saveFile}>Download</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default DownloadModal
