import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Layout from './Layout';
import Select from './components/Select';

const CRANIAL_NERVES = [
  'OLFACTORY',
  'OPTIC',
  'OCULARMOTOR',
  'TROCHLEAR',
  'TRIGEMINAL',
  'ABDUCENS',
  'FACIAL',
  'VESTIBULOCOCHLEAR',
  'GLOSSOPHARYNGEAL',
  'VAGUS',
  'ACCESSORY',
  'HYPOGLOSSAL',
]

const SENSORY_MOTOR = ['S', 'M', 'B']

const FUNCTION = [
  'SMELL',
  'VISION',
  'EYE MOVEMENT',
  'S - FOREHEAD | JAW | EYE',
  'M - MASTICATION',
  'S - TASTE ANTERIOR 2/3',
  'M - FACIAL EXP | TEAR | SALIVA',
  'EQUILIBRIUM | HEARING',
  'S - TASTE POST 1/3 | PHARYNX',
  'M - PHARYNX | SALIVA',
  'S - LARYNX',
  'M - PHARYNX | LARYNX | ABDOMINAL & THORACIC ORGANS',
  'TRAPEZIUS & STERNOCLEIDOMASTOID',
  'TONGUE',
]

const areSetsEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value));

const Card = ({ label, expected }) => {
  const [cranialNerve, setCranialNerve] = useState('')
  const [sensoryMotor, setSensoryMotor] = useState('')
  const [functions, setFunctions] = useState([])
  const [backgroundColor, setBackgroundColor] = useState('white')

  const onCheck = () => {
    if (
      cranialNerve === expected.cranialNerve &&
      sensoryMotor === expected.sensoryMotor &&
      areSetsEqual(new Set(functions), new Set(expected.functions))
    ) {
      setBackgroundColor('#77dd77')
    } else {
      setBackgroundColor('#FF6961')
    }
  }

  return (
    <MuiCard variant="outlined" sx={{ backgroundColor }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {label}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Select
              label={"Cranial Nerve"}
              value={cranialNerve}
              onChange={e => setCranialNerve(e.target.value)}
            >
              {CRANIAL_NERVES.sort().map(x => (
                <MenuItem value={x}>{x}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Select
              label={"Sensory/Motor"}
              value={sensoryMotor}
              onChange={e => setSensoryMotor(e.target.value)}
            >
              {SENSORY_MOTOR.sort().map(x => (
                <MenuItem value={x}>{x}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Select
              label={"Function"}
              multiple
              value={functions}
              onChange={e => setFunctions(e.target.value)}
            >
              {FUNCTION.sort().map(x => (
                <MenuItem value={x}>{x}</MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onCheck}>Check</Button>
      </CardActions>
    </MuiCard>
  )
}

const StudyGuidePage = () => {
  return (
    <Layout>
      <Box component="main" sx={{ maxWidth: '1248px', width: '100%', margin: 'auto', p: 3 }}>
        <Stack spacing={2}>
          <Card label="CN I" expected={{
            cranialNerve: 'OLFACTORY',
            sensoryMotor: 'S',
            functions: ['SMELL'],
          }} />

          <Card label="CN II" expected={{
            cranialNerve: 'OPTIC',
            sensoryMotor: 'S',
            functions: ['VISION'],
          }} />

          <Card label="CN III" expected={{
            cranialNerve: 'OCULARMOTOR',
            sensoryMotor: 'M',
            functions: ['EYE MOVEMENT'],
          }} />

          <Card label="CN IV" expected={{
            cranialNerve: 'TROCHLEAR',
            sensoryMotor: 'M',
            functions: ['EYE MOVEMENT'],
          }} />

          <Card label="CN V" expected={{
            cranialNerve: 'TRIGEMINAL',
            sensoryMotor: 'B',
            functions: ['S - FOREHEAD | JAW | EYE', 'M - MASTICATION'],
          }} />

          <Card label="CN VI" expected={{
            cranialNerve: 'ABDUCENS',
            sensoryMotor: 'M',
            functions: ['EYE MOVEMENT'],
          }} />

          <Card label="CN VII" expected={{
            cranialNerve: 'FACIAL',
            sensoryMotor: 'B',
            functions: ['S - TASTE ANTERIOR 2/3', 'M - FACIAL EXP | TEAR | SALIVA'],
          }} />

          <Card label="CN VIII" expected={{
            cranialNerve: 'VESTIBULOCOCHLEAR',
            sensoryMotor: 'S',
            functions: ['EQUILIBRIUM | HEARING'],
          }} />

          <Card label="CN IX" expected={{
            cranialNerve: 'GLOSSOPHARYNGEAL',
            sensoryMotor: 'B',
            functions: ['S - TASTE POST 1/3 | PHARYNX', 'M - PHARYNX | SALIVA'],
          }} />

          <Card label="CN X" expected={{
            cranialNerve: 'VAGUS',
            sensoryMotor: 'B',
            functions: ['S - LARYNX', 'M - PHARYNX | LARYNX | ABDOMINAL & THORACIC ORGANS'],
          }} />

          <Card label="CN XI" expected={{
            cranialNerve: 'ACCESSORY',
            sensoryMotor: 'M',
            functions: ['TRAPEZIUS & STERNOCLEIDOMASTOID'],
          }} />

          <Card label="CN XII" expected={{
            cranialNerve: 'HYPOGLOSSAL',
            sensoryMotor: 'M',
            functions: ['TONGUE'],
          }} />
        </Stack>
      </Box>
    </Layout>
  )
}

export default StudyGuidePage
