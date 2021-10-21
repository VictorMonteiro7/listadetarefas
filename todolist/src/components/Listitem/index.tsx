import * as C from './styles';
import { Item } from '../../types/item';
type Props = {
  item: Item;
  id: string;
  onChange: (id: number, done: boolean) => void;
};

export const Listitem = ({ item, onChange, id }: Props) => {
  return (
    <C.Container>
      <input
        id={id}
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      <label>
        {item.done ? (
          <del>
            {item.name} : {item.done.toString()}
          </del>
        ) : (
          <>
            {item.name} : {item.done.toString()}
          </>
        )}{' '}
      </label>
    </C.Container>
  );
};
