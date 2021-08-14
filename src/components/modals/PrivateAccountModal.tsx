import Image from 'next/image'
import Modal from 'react-responsive-modal'
import styles from '../../styles/PrivateAccountModal.module.css'
import { trackEvent } from '../../config/analytics'
import { cdn } from '../../utils/url'
import SadFace from '../illustrations/SaveFace'

interface Props {
  username: string
  profileUrl: string
  open: boolean
  onClose(): void
}
const PrivateAccountModal = ({ username, profileUrl, open, onClose }: Props) => {
  const onClickTryAnotherLink = () => {
    onClose()
    trackEvent({ action: 'tryAnotherLink' })
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
        <figure>
          <SadFace />
        </figure>
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
        <p>
          Unable to download. <span className={styles.red}>Account is private.</span>
        </p>
        <button onClick={onClickTryAnotherLink}>Try another link</button>
      </div>
    </Modal>
  )
}

export default PrivateAccountModal
