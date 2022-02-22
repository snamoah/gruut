import Modal from 'react-responsive-modal'
import styles from '../../styles/PrivateAccountModal.module.css'
import { trackEvent } from '../../config/analytics'
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
    trackEvent({ action: 'tryAnotherLinkFromError' })
  }

  const isServerError = error && error.statusCode === 500

  const errorMessage = isServerError
    ? 'Sorry, Something went wrong. Try again later'
    : error.message

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
        <p>{errorMessage}</p>
        {!isServerError && (
          <button onClick={onClickTryAnotherLink}>Try another link</button>
        )}
      </div>
    </Modal>
  )
}

export default ErrorModal
