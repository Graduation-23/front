export default Object.freeze([
  {
    tag: '식비',
    description: '식비, 카페/간식',
  },
  {
    tag: '쇼핑',
    description: '온라인쇼핑, 패션/쇼핑',
  },
  {
    tag: '문화/여가',
    description: '술/유흥, 문화/여가, 여행/숙박',
  },
  {
    tag: '생활',
    description: '생활, 뷰티/미용, 주거',
  },
  {
    tag: '교통',
    description: '교통, 자동차',
  },
  {
    tag: '학습',
    description: '교육/학습, 자녀/육아',
  },
  {
    tag: '의료/건강',
    description: '건강 보험',
  },
  {
    tag: '금융',
    description: '금융',
  },
  {
    tag: '반려동물',
    description: '반려동물',
  },
  {
    tag: '경조/선물',
    description: '생일 선물',
  },
]);

export const CategoryTagColors = Object.freeze({
  식비: '#fb6152',
  쇼핑: '#6eff5e',
  '문화/여가': '#5bffad',
  생활: '#e2837e',
  교통: '#e0cfff',
  학습: '#93b0ff',
  '의료/건강': '#ff77b0',
  금융: '#513cff',
  반려동물: '#d5f288',
  '경조/선물': '#ce5aff',
}) as {[key: string]: string};
