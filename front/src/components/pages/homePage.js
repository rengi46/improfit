import React from 'react'
import { Button } from '../inputs/button'
import { AddImage } from '../forms/fAddImage'
import { ImageGrid } from '../grid'
import { UploadIcon } from '../icons/uploadIcon'
import { Modal } from '../modal'

export const HomePage = () => {
  const [modal, setModal] = React.useState(false);

  const handleClick = () => {
    setModal(true);
  }
  return (
    <>
      <div className='my-16'>
        <Button click={handleClick}>
            <UploadIcon />
        </Button>
        <ImageGrid/>
      </div>

      {modal &&
        <Modal
          close={() => setModal(false)}
        >
          <AddImage close={() => setModal(false)}/>
        </Modal>
      }
    </>
  )
}
