import { Modal, Button } from "react-bootstrap";

type IProps = {
  title: string;
  body: string;
  showModal: boolean;
  setShowModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

function BaseModal({ title, body, showModal, setShowModal }: IProps) {
  return (
    <>
      <Modal show={showModal} backdrop="static" keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
            ok!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BaseModal;
