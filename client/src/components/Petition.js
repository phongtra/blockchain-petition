import React from 'react';
import { Card, Input, Button } from 'semantic-ui-react';

const Petition = ({ name, onVote, setName }) => {
  return (
    <>
      <Card fluid>
        <Card.Content>
          <Card.Header>Petition</Card.Header>
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
            deducted, and that also applied to all our parents. Our school has
            been shut down since 13/3 and there is no certain way to know when
            we will be able to get back to school, given the complicated
            situation. We know that the school has created opportunities for us
            student to study remotely, but there are some subjects that are
            required us to be available on campus so that we can maximize our
            learning and all those opportunities are currently suspended,
            putting us in an extreme disadvantage. Moreover, there are some
            exercises require equipment, and the solution that some teachers
            gave us is that we must buy our own equipment. Since our parents are
            also have a hard time making money to provide to us and there are
            currently little jobs available, we would like the school to support
            us students and reduce our tuition fee of this year, aside from the
            scholarship. We know that the scholarship is the incentive for us to
            be on the right study track, and normally we need that scholarship
            in order to afford school in Finland without putting us in debt.
            However, everybody is having a hard time around the world, and it is
            really hard for our parents to provide us enough money because a lot
            of our parents are losing salary because of this pandemic. We really
            urge the school to consider this request and help us student,
            because the school is the last source of support that we can receive
            at the moment. Thank you for reading this message.
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
