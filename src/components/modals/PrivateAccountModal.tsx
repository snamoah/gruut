import Modal from 'react-responsive-modal'
import styles from '../../styles/PrivateAccountModal.module.css'
import SadFace from '../illustrations/SaveFace'

interface Props {
  username: string
  profileUrl: string
  open: boolean
  onClose(): void
}
const PrivateAccountModal = ({ username, profileUrl, open, onClose }: Props) => {
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
        <figure>
          <SadFace />
        </figure>
        <header>
          {/* <Image src={profileUrl as any} layout="fill" /> */}
          <span>@{username}</span>
        </header>
        <p>
          Unable to download. <span className={styles.red}>Account is private.</span>
        </p>
        <button onClick={onClose}>Try another link</button>
      </div>
    </Modal>
  )
}

export default PrivateAccountModal
