<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-profile',
                    index: 'dashboard',
                    title: '主页'
                },
                {
                    icon: 'el-icon-lx-read',
                    index: 'addPaper',
                    title: '添加论文'
                },
                {
                    icon: 'el-icon-lx-read',
                    index: 'addItem',
                    title: '添加项目'
                },
                {
                    icon: 'el-icon-lx-read',
                    index: 'addPatent',
                    title: '添加专利'
                },
                {
                    icon: 'el-icon-lx-news',
                    index: '5',
                    title: '个人信息',
                    subs: [
                        {
                            index: 'achievement',
                            title: '本人成就'
                        },
                        
                    ]
                },
               
                {
                    icon: 'el-icon-lx-crown',
                    index: '7',
                    title: '成果管理',
                    subs: [
                        {
                            index: 'controlPapper',
                            title: '管理论文'
                        },
                        {
                            index: 'controlItem',
                            title: '管理项目'
                        },
                        {
                            index: 'controlPatent',
                            title: '管理专利'
                        },
                    ]
                },
                {
                    icon: 'el-icon-lx-group',
                    index: '8',
                    title: '教师管理',
                    subs: [
                        {
                            index: 'addTeacher',
                            title: '添加教师'
                        },
                        {
                            index: 'account ',
                            title: '账号管理'
                        },
   
                    ]
                },
                {
                    icon: 'el-icon-lx-sort',
                    index: 'controlPeriodical',
                    title: '刊库管理'
                },
                {
                    icon: 'el-icon-lx-home',
                    index: 'schoolInfo',
                    title: '学院信息'
                },
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
