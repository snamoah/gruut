import { debounce } from 'lodash'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import styles from '../styles/InputBox.module.css'
import Verified from '../components/icons/Verified'
import { cleanUrl, verifyUrlType } from '../utils/url'
import { PostMeta } from '../utils/constants'
import CrossCircle from './icons/CrossCircle'

interface InputBoxProps {
  loading?: boolean
  onSubmit: (url: string) => void
}

const InputBox = ({ onSubmit }: InputBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [fullUrl, setFullUrl] = useState('')
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [postTypeName, setPostTypeName] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value
    setValue(url)

    if (url) {
      checkLink(url)
    } else {
      /**
       * reset
       */
      setError('')
      setPostTypeName('')
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!error) {
      onSubmit(fullUrl)
    }
  }

  const checkLink = debounce((url: string) => {
    try {
      const urlType = verifyUrlType(url)
      setPostTypeName(PostMeta[urlType].name)
      setFullUrl(url)
      setValue(cleanUrl(url))
    } catch (err) {
      setError(err.message)
    }
  }, 200)

  const renderCheck = () => (error ? <CrossCircle /> : postTypeName ? <Verified /> : null)

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          ref={inputRef}
          id="inputBox"
          type="text"
          value={value}
          spellCheck={false}
          onChange={onChange}
          required
        />
        <label htmlFor="inputBox">Paste Instagram link</label>
        <p>
          <span>
            {postTypeName || error} <span>{renderCheck()}</span>
          </span>
        </p>
      </form>
      <p className={styles.tip}>
        + Press <b>Enter</b> to download
      </p>
    </>
  )
}

export default InputBox
