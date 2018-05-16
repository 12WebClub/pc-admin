import api from './index';

const path = {
  // 搜索接口
  ppoolInfos: '/ppool/infos',
  ppoolTarget: '/ppool/target',
  ppoolCategory: '/ppool/category',
  // ppoolCategoryLv: '/ppool/categoryLv',
};

const getPpoolInfos = (page, count, formValue) => api.get(path.ppoolInfos, {
  params: {
    page,
    count,
    score_type: formValue.score_type,
    sort_type: formValue.sort_type,
    category_id: formValue.category_id,
    website_id: formValue.website_id,
  },
});

const getPpoolTarget = () => api.get(path.ppoolTarget);

const getPpoolCategory = id => api.get(path.ppoolCategory, {
  params: {
    website_id: id,
  },
});

// const getPpoolCategoryLv = (websiteId, categoryId) => api.get(path.ppoolCategoryLv, {
//   params: {
//     website_id: websiteId,
//     category_id: categoryId,
//   },
// });

export default {
  getPpoolInfos,
  getPpoolTarget,
  getPpoolCategory,
  // getPpoolCategoryLv,
};
