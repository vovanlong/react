import {createStackNavigator} from 'react-navigation';
import ReduxDemo from "../screen/ReduxDemo";
import DetailScreen from "../screen/detail/DetailScreen";
import NewsDetail from "../screen/news/NewsDetail";
import DbDemoScreen from "../screen/db_demo/DbDemoScreen";

export const MainRouter = createStackNavigator({
    Main: {
        screen: ReduxDemo
    },
    Detail: {
        screen: DetailScreen
    },
    NewsDetail: {
        screen: NewsDetail
    },
    DB: {
        screen: DbDemoScreen
    }
});