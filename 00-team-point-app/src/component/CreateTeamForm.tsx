import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, Form, Modal, FormControl} from "react-bootstrap";
import {ITeam} from "../types/Types";

type CreateTeamFormProps = {
    onFormClose: () => void,
    showFormPopup: boolean,
    onCreateTeamSubmit: (newTeam: ITeam) => void
}

const CreateTeamForm: React.FC<CreateTeamFormProps> = (props) => {

    const {onFormClose, showFormPopup, onCreateTeamSubmit} = props;
    const [team, setTeam] = useState<string | null>("");
    const [point, setPoint] = useState<number>(0);
    const [isFormValidate, setIsFormValidate] = useState<boolean>(false);

    const handleOnTeamInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      let name = String(e.target.value);
      name = name.trimStart();
      setTeam(name);
    }

    const handleOnPointInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPoint(parseInt(e.target.value.replace(/\D/g,'')));
    }

    const handleOnSubmit = (e: FormEvent) => {
      e.preventDefault();
      if(team === '' || team === null){
          setIsFormValidate(true);
      }
      else {
          const newTeam: ITeam = {
              name: team,
              points: point
          }
          onCreateTeamSubmit(newTeam);
      }
    }

    return (
        <Modal show={showFormPopup} onHide={onFormClose} >
            <Modal.Header closeButton>
                <Modal.Title>Add Team</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleOnSubmit} validated={isFormValidate} noValidate>
                    <Form.Group>
                        <Form.Label className="mb-1">Name of Team</Form.Label>
                        <Form.Control type="text" required onChange={handleOnTeamInputChange}
                                      />
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">Please Enter Team Name</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1 ms-1">Enter Number Of Points</Form.Label>
                        <Form.Control type="text" required value={point}
                                      onChange={handleOnPointInputChange.bind(this)}
                                      placeholder="Enter Only Numbers"/>
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">Please Enter Number Of Points</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Button className='btn-dark mb-0 m-1 mt-2 float-end' type={"submit"}>Add Team</Button>
                    <Button className='mb-0 float-end m-1 mt-2' variant="secondary" onClick={onFormClose} >
                        Close
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

    );
};

export default CreateTeamForm;
