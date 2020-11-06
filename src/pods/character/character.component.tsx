import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations'
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="name" />
          <TextFieldComponent name="species" label="species" />
          <TextFieldComponent
            name="comments"
            label="comments"
            multiline={true}
            rows={3}
            rowsMax={5}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
