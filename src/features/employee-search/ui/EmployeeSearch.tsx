import { Stack, SvgIcon, TextField } from '@mui/material';
import SearchIcon from '../../../assets/icons/search.svg?react';
import type { GlobalFilterType } from '../../../widgets/EmployeesTableWidget';

export const EmployeeSearch = ({ globalFilter, setGlobalFilter }: GlobalFilterType) => {
  return (
    <Stack
      direction={'row'}
      sx={{
        height: 36,
        alignItems: 'center',
        backgroundColor: 'common.white',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'grey.400',
      }}
    >
      <TextField
        value={globalFilter ?? ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        size="small"
        sx={{
          backgroundColor: 'transparent',
          height: 36,
          border: 'none',
          '& fieldset': {
            border: 'none',
            borderRadius: 0,
            height: 36,
          },
        }}
      />
      <SvgIcon component={SearchIcon} inheritViewBox sx={{ width: 36, height: 36, fill: 'none' }} />
    </Stack>
  );
};
