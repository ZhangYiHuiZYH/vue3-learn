<template>
    <div >
        <div class="search-wrap">
            <span class="">组件名称：</span>
            <!-- :style="{width: '200px'}" input-style="width:170px" -->
            <el-input  input-style="width:170px" v-model="componentName" size="large" placeholder="Please input" />
             <span class="" :style="{'padding-left': '40px'}">项目名称：</span>
            <el-input  input-style="width:170px" v-model="itemName" size="large" placeholder="Please input" />
            <span class="" :style="{'padding-left': '40px'}">UI库类型：</span>
            <el-select v-model="UIType" class="m-2" placeholder="Select" size="large">
                <el-option
                    v-for="item in UIOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
            </el-select>
            <span class="" :style="{'padding-left': '40px'}">库版本号：</span>
            <el-select v-model="libraryVersion" class="m-2" placeholder="Select" size="large">
                <el-option
                    v-for="item in VersionOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
            </el-select>
            <el-button :style="{'margin-left': '20px'}" type="primary" @click="search">查询</el-button>
        </div>
        <span class="" :style="{'padding-left': '40px'}" v-if="componentNameComputed.length > 8">{{componentNameComputed}}</span>
        <div>
            <el-table :data="tableData" border style="width: 100%">
                <!-- of 替代 in -->
                <el-table-column v-for="(item,index) of tabelHeads" :prop="item.prop" :label="item.label" :key="index"/>
            </el-table>
        </div>
        <!-- <div>
            <div v-for="(num,index) in 6" :key="index">{{num}}</div>
        </div> -->
    </div>
</template>
<script setup>
    //TODO 未引用computed 计算结果也生效了
    // import { ref, watch, reactive } from 'vue'
    const componentName = ref('')
    const itemName = ref('')
    const libraryVersion = ref('')
    let UIType = ref('')
    const VersionOptions = ref([
        {
            value: 'Option1',
            label: '1.1',
        }
    ])
    const tableData = ref([])
    const UIOptions = [
        {
            value: 1,
            label: '轮子库',
        },
        {
            value: 2,
            label: 'element',
        },
        {
            value: 3,
            label: 'elementPlus',
        }
    ]
    const tabelHeads = [
        {
            prop: 'componentName',
            label: '组件名称'
        },
        {
            prop: 'libraryVersion',
            label: '库版本号'
        },
        {
            prop: 'itemName',
            label: '项目名称'
        },
        {
            prop: 'nums',
            label: '次数'
        }
    ]
    //计算属性 Start
        const componentNameComputed = computed(() => {
            return '侦听后的结果++' + componentName.value + itemName.value
        })
        // const componentNameComputed = computed({
        //     // getter
        //     get() {
        //         return '侦听后的结果++' + componentName.value + itemName.value
        //     },
        //     // setter
        //     set(newValue) {
        //         itemName.value = newValue
        //     }
        // })
    //计算属性 End
    //侦听器 Start
        watch(UIType,(newValue,oldValue)=>{
            console.log('UIType', newValue)
            if(newValue === 1){
                VersionOptions.value = [{
                    value: 'Option2',
                    label: '1.2',
                },
                {
                    value: 'Option3',
                    label: '1.3',
                },
                {
                    value: 'Option4',
                    label: '1.4',
                },
                {
                    value: 'Option5',
                    label: '1.5',
                }]
            }else {
                VersionOptions.value = [
                    {
                        value: 'Option1',
                        label: '1.1',
                    }
                ]
            }
        },{})//{}传参数
        //
        watchEffect(async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
            )
            data.value = await response.json()
        })
        watchPostEffect(() => {
            /* 在 Vue 更新后执行 */
        })

    //侦听器 End
    function search (){
        //验证技术属性默认是只有只读功能 Start   
        componentNameComputed.value = 'compute赋值' //结果给出警告且修改不生效 “computed value is readonly”
        //验证技术属性默认是只有只读功能 Start
        tableData.value = [{
            componentName:'树形字母菜单',
            libraryVersion: '0.12',
            itemName:'知识库管理系统',
            nums: 1,
        }]
    }
</script>
<style>
    .search-wrap{
        padding: 20px;
    }
</style>