import {ScrollView, View} from 'react-native';
import category from '@constants/category';
import CategoryItem from './CategoryItem';

type CategoryViewProps = {
  setTag(tag: string): void;
  tag: string;
};

export default function CategoryView({setTag, tag}: CategoryViewProps) {
  return (
    <ScrollView>
      <View
        style={{
          marginTop: 15,
          flex: 1,
          height: '80%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {category.map(el => (
            <CategoryItem
              key={el.tag}
              onClick={() => setTag(el.tag)}
              {...el}
              selected={el.tag === tag}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
