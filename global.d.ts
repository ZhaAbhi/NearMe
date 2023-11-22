// In a global.d.ts or somewhere similar
declare module '*.jpeg' {
  const value: any;
  export default value;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module 'react-native-vector-icons/Entypo' {
  import {Icon} from 'react-native-vector-icons/Icon';

  const Entypo: Icon;
  export default Entypo;
}

declare module 'react-native-vector-icons/Foundation' {
  import {Icon} from 'react-native-vector-icons/Icon';

  const Foundation: Icon;
  export default Foundation;
}

declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import {Icon} from 'react-native-vector-icons/Icon';

  const MaterialCommunityIcons: Icon;
  export default MaterialCommunityIcons;
}
