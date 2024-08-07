'use client';
import React, { useEffect } from 'react';
import QuizContainer from '@/components/QuizOutSiteBox';
import { useRouter } from 'next/navigation';
import { taco } from '../../database/fullTaco'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function convertKJToKcal(kJ: number): number {
  const conversionFactor = 0.239006;
  return kJ * conversionFactor;
}

const HomeFoodLogic: React.FC<any> = () => {
  // console.debug(typeof taco)
  // console.debug(JSON.parse(taco))

  // // limpa o storage
  // sessionStorage.setItem('client_result', '')
  // const router = useRouter()

  const [tacoData, setTacoData] = React.useState<any[] | null >(null)
  const [gramsError, setGramsError] = React.useState<boolean>(true)
  const [touched, setTouched] = React.useState<boolean >(false);
  const [buttonTouched, setButtonTouched] = React.useState<boolean >(false);

  const [button, setButton] = React.useState<boolean >(false)
  const [selected, setSelected] = React.useState<null | object >(null)
  const [grams, setGram] = React.useState<Number>(0)
  // // const [coop_code, setCoopCode] = React.useState<string | null>(null)
  // const [isAssociated, setIsAssociated] = React.useState<string>('')

  const getSelectFood = async (e: any, n: any) => {
    const value = n
    if (n !== undefined && n?.id !== undefined) {
      const selected = tacoData?.filter((food: any) => food.id === value.id)
      if (selected !== undefined && selected[0] !== undefined) {
        setSelected(selected[0])
      }
    }
  }
  const onInput = (e: any) => {
    const value = e.target.value
    if(Number.isNaN(Number(value))) {
      console.debug('n-numero')
      setGramsError(true)
    } else {
      setGramsError(false)
      setGram(value)
    }
  }
  const getNutrition = () => {
    console.debug(selected, 'food')
    console.debug(grams, 'grams')
  };
  const handleBlur = () => {
    setTouched(true);
  };
  const handleBlurButton = () => {
    setButtonTouched(true);
  };

  useEffect( () => {
    const tacoJSON = JSON.parse(taco)
    setTacoData(tacoJSON.taco)
  }, [])

  const hasNotData = selected === null && gramsError
return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {tacoData && (
            <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
        <Autocomplete
          disablePortal
        
          id="combo-box-demo"
          options={tacoData}
          getOptionLabel={(option) => option.descricao}
          sx={{ width: 300 }}
          onChange={getSelectFood}
          onBlur={handleBlur}
          renderInput={(params) => <TextField
              error={touched && selected === null}
              {...params}
              label="Alimento" 
              />}
        />
        <TextField
          error={buttonTouched && gramsError}
          onChange={onInput} 
          id="outlined-basic" 
          label="Gramas" 
          variant="outlined"
          helperText={gramsError ? "Insira Apenas Números" : ' '}
          // value={grams}
          onBlur={handleBlurButton}
          />
        <Button
          disabled={hasNotData}
          onClick={getNutrition}
          variant="contained"
          >
            Calcular
        </Button>
          {selected && (
            <p>{JSON.stringify(selected, null, 2)}</p>
          )}
        </div>
          // </Box>
      )}
  </div>
  );
};
export default HomeFoodLogic

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
