import Image from 'next/image'
import Modal from 'react-responsive-modal'
import styles from '../../styles/PrivateAccountModal.module.css'
import { trackEvent } from '../../config/analytics'
import { cdn } from '../../utils/url'
import SadFace from '../illustrations/SaveFace'

export interface RequestError {
  statusCode: number
  message: string
  error: string
}

interface Props {
  error: RequestError
  open: boolean
  onClose(): void
}
const ErrorModal = ({ error, open, onClose }: Props) => {
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
        <p>{error.message}</p>
        <button onClick={onClickTryAnotherLink}>Try another link</button>
      </div>
    </Modal>
  )
}

export default ErrorModal
