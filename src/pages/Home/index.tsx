/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Dispatch } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  withFormik, FormikProps, Form,
} from 'formik';
import {
  setAnswer,
  setNextQuestion,
  restart,
} from '../../store/middlewares/game/game.actions';
import {
  Container,
  Title,
  Wrapper,
  Input,
  Button,
  TitleResult,
} from './styles';

interface IQuestion {
    id: number,
    question: string,
    answer: string,
}
interface FormValues {
    answer: string
}

interface OtherProps {
    question: IQuestion
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    touched, errors, isSubmitting, question,
  } = props;

  return (
    <div>
      <Wrapper>
        <Title>
          {question.question}
        </Title>
        <Form>
          <Input
            touched={touched.answer}
            errors={errors.answer}
            type="text"
            name="answer"
            placeholder="Type your answer"
          />
          {touched.answer && errors.answer && <p>Answer is required.</p>}
          <Button type="submit" disabled={isSubmitting}>
            Next
          </Button>
        </Form>
      </Wrapper>
    </div>
  );
};

interface QuestionFormProps {
    initialAnswer?: string;
    question: IQuestion
    dispatch: Dispatch<any>
  }

const QuestionSchemaValidation = Yup.object({
  answer: Yup.string().required(),
});

const QuestionForm = withFormik<QuestionFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    answer: props.initialAnswer || '',
  }),
  validationSchema: QuestionSchemaValidation,
  handleSubmit: async (values, { props, setSubmitting }) => {
    props.dispatch(setAnswer(values.answer, props.question));
    props.dispatch(setNextQuestion(props.question));
    values.answer = '';
    setSubmitting(true);
  },
})(InnerForm);

interface RootState {
  game: any
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector((state: RootState): IQuestion => state.game.currentQuestion);
  const result = useSelector((state: RootState): IQuestion => state.game.result);
  console.log(currentQuestion);
  if (!currentQuestion) {
    return (
      <Container>
        <Title>Sentence Game</Title>
        <Wrapper>
          <TitleResult>
            {result}
          </TitleResult>
          <Button
            type="button"
            onClick={() => {
              console.log(currentQuestion);
              dispatch(restart());
            }}
          >
            Restart
          </Button>
        </Wrapper>
      </Container>
    );
  }
  return (
    <Container>
      <Title>Sentence Game</Title>
      <QuestionForm question={currentQuestion} dispatch={dispatch} />
    </Container>
  );
};

export default connect()(Home);
