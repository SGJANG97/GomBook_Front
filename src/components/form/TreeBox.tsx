import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export interface TreeData {
  id: string;
  label: string;
  sub?: TreeData[];
}

interface Props {
  data?: TreeData[];
}

export default function TreeBox(props: Props) {
  const { data } = props;
  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        {data?.map((item, key) => (
          <TreeItem itemId={item.id} label={item.label} key={key}>
            {item.sub?.map((subItem, subKey) => (
              <TreeItem itemId={subItem.id} label={subItem.label} />
            ))}
          </TreeItem>
        ))}
      </SimpleTreeView>
    </Box>
  );
}
