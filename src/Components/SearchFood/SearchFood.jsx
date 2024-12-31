import * as React from 'react';
import { TextField, Stack, Title, Button, ColorPaletter } from '../index'
import { Link } from 'react-router-dom';

export default function SearchFood() {
  const [search , setSearch] = React.useState('')
  return <ColorPaletter children={(
    <Stack spacing={2} sx={{ width: '50%', margin: 'auto', my: 12 }}>
      <Title
        title={"Search Your Recipe"}
        variant={'h2'}
        component={'h1'}
        styles={{
          color: 'primary.main'
        }}
      />
      <Stack
        direction={'row'}
        spacing={1}
        flexWrap={'wrap'}
      >

        <TextField
          id="filled-search"
          label="Search Recipe"
          type="search"
          variant="filled"
          sx={{ flexGrow: 2 }}
          value={search}
          onChange={((e) => setSearch(e.target.value))}
        />
        <Link to={search ? `api/search/${search}`: ''}>
          <Button 
            variant="contained" 
            sx={{height:'100%'}}
          >Search</Button>
        </Link>
      </Stack>
    </Stack>
  )}
  />

}

