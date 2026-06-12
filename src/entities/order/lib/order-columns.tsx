import { createColumnHelper } from '@tanstack/react-table';
import type { Order } from '../model/types';
import {
  Avatar,
  Box,
  Checkbox,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import DeleteIcon from '../../../assets/icons/delete.svg?react';
import CommentWhiteIcon from '../../../assets/icons/comment-white.svg?react';
import CommentBlackIcon from '../../../assets/icons/comment-black.svg?react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const columnHelper = createColumnHelper<Order>();

export const orderColumns = [
  columnHelper.accessor('category', {
    id: 'category',
  }),
  columnHelper.display({
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        size="small"
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
        sx={{ color: 'grey.200', marginRight: { xs: 0.5, sm: 2 } }}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        size="small"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
        sx={{ color: 'grey.200', marginRight: { xs: 0.5, sm: 2 } }}
      />
    ),
  }),
  columnHelper.accessor('name', {
    header: 'Dish',
    cell: (props) => {
      const { name, imageUrl } = props.row.original;

      return (
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Avatar
            src={imageUrl}
            alt={name}
            sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}
          ></Avatar>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' }, color: 'primary.dark' }}
          >
            {name}
          </Typography>
        </Stack>
      );
    },
  }),
  columnHelper.accessor('price', {
    header: 'Price',
    cell: (props) => `$${props.getValue().toFixed(2)}`,
  }),

  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (props) => {
      const amount = props.getValue();
      const rowId = props.row.original.id;
      const updateAmount = props.table.options.meta?.updateAmount;

      return (
        <Stack direction={'row'} spacing={1}>
          <IconButton
            size="small"
            onClick={() => updateAmount && updateAmount(rowId, amount - 1)}
            disabled={amount <= 1}
            sx={{
              backgroundColor: 'grey.100',
              color: 'primary.dark',
              width: 30,
              height: 30,
              '&:hover': {
                opacity: 0.8,
              },
              '&:disabled': { backgroundColor: 'grey.100' },
            }}
          >
            <RemoveIcon
              sx={{
                fontSize: 16,
                stroke: 'currentColor',
                strokeWidth: 1.5,
              }}
            />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'common.white',
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: '50%',
              color: 'primary.dark',
              width: 30,
              height: 30,
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Typography sx={{ fontWeight: 800, fontSize: { xs: 13, sm: 14 } }}>{amount}</Typography>
          </Box>
          <IconButton
            size="small"
            disabled={amount >= 9}
            onClick={() => updateAmount && updateAmount(rowId, amount + 1)}
            sx={{
              backgroundColor: 'grey.100',
              color: 'primary.dark',
              width: 30,
              height: 30,
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <AddIcon
              sx={{
                fontSize: 16,
                stroke: 'currentColor',
                strokeWidth: 1.5,
              }}
            />
          </IconButton>
        </Stack>
      );
    },
  }),
  columnHelper.display({
    id: 'itemTotal',
    cell: (props) => {
      if (props.row.original.amount === 1) return;

      const itemTotal = (props.row.original.price * props.row.original.amount).toFixed(2);
      return `$${itemTotal}`;
    },
  }),
  columnHelper.accessor('comment', {
    header: '',
    cell: (props) => {
      const comment = props.getValue();
      const hasComment = Boolean(comment);

      const commentButton = (
        <IconButton size="small" sx={{ '&:hover': { opacity: 0.8 } }}>
          <SvgIcon component={hasComment ? CommentBlackIcon : CommentWhiteIcon} inheritViewBox />
        </IconButton>
      );

      if (hasComment) {
        return (
          <Tooltip
            title={comment}
            placement="top-end"
            arrow
            slotProps={{
              tooltip: {
                sx: {
                  padding: '4px 8px',
                  fontSize: 13,
                  fontWeight: 500,
                  backgroundColor: 'primary.main',
                },
              },
              arrow: {
                sx: { color: 'primary.main' },
              },
            }}
          >
            {commentButton}
          </Tooltip>
        );
      }
      return commentButton;
    },
  }),
  columnHelper.display({
    id: 'deleteButton',
    cell: (props) => {
      const rowId = props.row.original.id;
      const deleteRow = props.table.options.meta?.deleteRow;
      return (
        <IconButton
          size="small"
          onClick={() => deleteRow && deleteRow(rowId)}
          sx={{ '&:hover': { opacity: 0.8 } }}
        >
          <DeleteIcon />
        </IconButton>
      );
    },
  }),
];
