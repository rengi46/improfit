import React from 'react'
import { Button } from '../button'
import { AddImage } from '../fAddImage'
import { ImageGrid } from '../grid'
import { UploadIcon } from '../icons/uploadIcon'
import { Modal } from '../modal'

export const HomePage = () => {
  const [modal, setModal] = React.useState(false);

  const handleClick = () => {
    console.log(modal);
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
