import { Box, Button, Stack, Typography } from '@mui/material';

export const Card = ({
  label,
  number,
  buttonText,
}: {
  label: string;
  number: number;
  buttonText: string;
}) => {
  return (
    <Stack
      spacing={2}
      sx={{ backgroundColor: 'primary.light', padding: 3, borderRadius: 2, flex: '1 0 auto' }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: 14, color: 'primary.dark', opacity: 0.4 }}>
        {label}
      </Typography>
      <Stack direction={'row'} spacing={2} sx={{ alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 600, fontSize: 40, color: 'primary.dark' }}>
          {number}
        </Typography>
        <Box sx={{ borderBottom: '1px solid', flex: '1 0 auto', opacity: 0.5 }}></Box>
        <Button
          sx={{
            backgroundColor: 'common.white',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 300,
          }}
        >
          {buttonText}
        </Button>
      </Stack>
    </Stack>
  );
};
