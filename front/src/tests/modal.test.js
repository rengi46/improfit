import "@testing-library/jest-dom/extend-expect"
import { fireEvent,render } from "@testing-library/react"

import { Modal } from "../components/modal"

describe("modal",()=>{
    const closeModal = jest.fn()
    test("render modal",()=>{
        const modal = render(  <Modal close={closeModal}><div>test</div></Modal>)
        modal.getByText("test")
    })
    test("modal close",()=>{
        const modal = render(  <Modal close={closeModal}><div>test</div></Modal>)
        const button = modal.getByRole('button')
        fireEvent.click(button)
        expect(closeModal).toHaveBeenCalledTimes(1)
    })
})