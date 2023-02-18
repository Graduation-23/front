import {View, StyleSheet} from 'react-native';
import PlainButton from '@components/PlainButton';
import {AppText} from '@components/AppText';
import ColorPickerModal from '../ColorPickerModal';

type CardRegColorPickerProps = {
  color: string;
  onChangeColor: (colors: string) => void;
  show: boolean;
  onChangeShow: (s: boolean) => void;
};

export default function CardRegColorPicker({
  color,
  onChangeColor,
  show,
  onChangeShow,
}: CardRegColorPickerProps) {
  const selectColor = (c: string) => {
    onChangeColor(c);
  };
  const toggleShow = () => {
    onChangeShow(!show);
  };

  return (
    <>
      <View style={styles.ModalContainer}>
        <PlainButton
          title={
            <AppText
              family="round-d"
              text="COLOR 선택"
              style={styles.FontSize20}
            />
          }
          onPress={toggleShow}
        />
        <View
          style={{
            borderWidth: 2,
            paddingHorizontal: 10,
            justifyContent: 'center',
            backgroundColor: color,
          }}>
          <AppText family="round-d" text="미리보기" style={styles.FontSize20} />
        </View>
      </View>

      {show && (
        <ColorPickerModal
          visible={show}
          toggle={toggleShow}
          icolor={color}
          selectColor={selectColor}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  ModalContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  Box: {
    borderWidth: 2,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  FontSize20: {
    fontSize: 20,
  },
});
