import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CategoryIconProps {
  tag: string;
}

export default function CategoryIcons({tag}: CategoryIconProps) {
  switch (tag) {
    case '식비':
      return <Icon name="silverware-fork-knife" size={25} color="black" />;
    case '쇼핑':
      return <Icon name="shopping" size={25} color="black" />;
    case '문화/여가':
      return <Icon name="ticket" size={25} color="black" />;
    case '생활':
      return <Icon name="cart" size={25} color="black" />;
    case '교통':
      return <Icon name="train-car" size={25} color="black" />;
    case '학습':
      return <Icon name="lead-pencil" size={25} color="black" />;
    case '의료/건강':
      return <Icon name="hospital-box" size={25} color="black" />;
    case '금융':
      return <Icon name="hand-coin" size={25} color="black" />;
    case '반려동물':
      return <Icon name="dog" size={25} color="black" />;
    case '경조/선물':
      return <Icon name="gift" size={25} color="black" />;
  }
  return (
    <>
      <Icon name="gift" size={20} />
    </>
  );
}
