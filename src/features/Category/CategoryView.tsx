import {View} from 'react-native';
import category from '@constants/category';
import CategoryItem from './CategoryItem';

type CategoryViewProps = {
  setTag(tag: string): void;
  tag: string;
};

export default function CategoryView({setTag, tag}: CategoryViewProps) {
  return (
    <View>
      {category.map(el => (
        <CategoryItem
          key={el.tag}
          onClick={() => setTag(el.tag)}
          {...el}
          selected={el.tag === tag}
        />
      ))}
    </View>
  );
}
