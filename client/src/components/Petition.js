import React from 'react';
import { Card, Input, Button } from 'semantic-ui-react';

const Petition = ({ name, onVote, setName }) => {
  return (
    <>
      <Card fluid>
        <Card.Content>
          <Card.Header>Petition for tuition fee</Card.Header>
          <Card.Meta>Xamk student</Card.Meta>
          <Card.Description>
            Dear IT Degree Program and the Principal of XAMK,
            <br />
            <br />
            As of this moment, Covid-19 has spread across the globe and we are
            all getting affected by it. Schools over the world are currently
            closing and the safe reopening day is still a big question. Economy
            is also getting affected by the result of the pandemic and there are
            a lot of people either lost their jobs, or getting their salary
            deducted, and that also applied to all our parents.
            <br />
            <br />
            Our school has been shut down since 13th of March and there is no
            certain way to know when we will be able to get back to school,
            given the complicated situation. We know this is an unavoidable
            situation and XAMK has also created opportunities for us student to
            study remotely. However, there are still subjects, projects and
            fieldtrips that require us to be available on campus so that we can
            maximize our learning. All of those opportunities are currently
            being suspended, putting us in an extreme disadvantage.
            <br />
            <br />
            In addition, our parents are experiencing a hard time making money
            to provide us when there are only a few jobs available at the
            moment. Some of us students are also losing our part-time jobs.
            Therefore, we would like to request our XAMK University to support
            us students and reduce our tuition fee of this year, aside from the
            scholarship.
            <br />
            <br />
            We know that the scholarship is the incentive for us to be on the
            right study track, and normally we would need that scholarship in
            order to afford university in Finland without putting us in debt.
            Nonetheless, everybody is struggling around the world in this
            pandemic crisis. We sincerely urge the school to consider this
            request and help us student, since the school is the last source of
            support that we can receive at the moment.
            <br />
            <br />
            Thank you for reading this message.
            <br />
            <br />
            Best,
            <br />
            <br />
            XAMK students.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Input
            placeholder="Real name please"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: '1vh' }}
          />
          <p>If you are going to sign, please enter your real name</p>
          <Button onClick={onVote} fluid primary content="Sign" />
        </Card.Content>
      </Card>
    </>
  );
};
export default Petition;
