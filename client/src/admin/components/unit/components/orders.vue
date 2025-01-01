<template>
  <HeaderAdmin @search="setSearchQuery" />
  <div class="main-block">
    <div class="orders-block">
      <div class="text">
        <h2>Orders</h2>
        <h5>Manage your store's orders</h5>
      </div>
      <BlockAdmin 
        id="Id" 
        name="Customer" 
        data="Total" 
        status="Status" 
        date="Date" 
        actions="Type" 
        :trash="true" 
      >
        <h5>Action</h5>
      </BlockAdmin>

      <BlockAdmin
        v-for="order in filteredProduct"
        :key="order.orderId"
        :id="order.orderId || 'N/A'"
        :name="order.nickName || 'Anonymous'"
        :data="`$ ${order.totalPrice}` || '0.00'"
        :status="order.process || 'Pending'"
        :date="order.createdAt || 'N/A'"
        :actions="order.digital ? 'digital' : 'standard'"
        :trash="true"
      >
        <div class="container-btn">
          <UiBadge
            style="cursor: pointer;"
            :styleBadge="`badge3`"
            :title="`Completed`"
            @click="updateOrderStatus(order.orderId, 'Completed', order.token, order.totalPrice)"
          />
          <UiBadge
            style="cursor: pointer;"
            :styleBadge="`badge4`"
            :title="`Delete`"
            @click="deleteOrder(order.orderId)"
          />
        </div>
      </BlockAdmin>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "../serchAdmin.vue";
import BlockAdmin from "./unit/blockAdmin.vue";
import UiBadge from "@/ui/badge.vue";
import { ref, onMounted, computed } from "vue";

export default {
  name: "OrdersPanel",
  components: {
    HeaderAdmin,
    BlockAdmin,
    UiBadge,
  },
  setup() {
    const searchQuery = ref(""); // search string
    const orders = ref([]);

    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/orders");
        if (response.ok) {
          orders.value = await response.json();
        } else {
          console.error("Ошибка при получении заказов:", response.statusText);
        }
      } catch (error) {
        console.error("Ошибка при получении заказов:", error);
      }
    };

    // delete Order
    const deleteOrder = async (orderId) => {
      try {
        const response = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          orders.value = orders.value.filter((order) => order.orderId !== orderId);
        } else {
          const errorData = await response.json();
          console.error("Ошибка при удалении заказа:", errorData);
        }
      } catch (error) {
        console.error("Ошибка при удалении заказа:", error);
      }
    };

    // approve order
    const updateOrderStatus = async (orderId, newStatus) => {
      try {
        const response = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        });

        if (response.ok) {
          orders.value = orders.value.map((order) =>
            order.orderId === orderId ? { ...order, process: newStatus } : order
          );
        } else {
          console.error("Ошибка при обновлении статуса:", response.statusText);
        }
      } catch (error) {
        console.error("error :", error);
      }
    };

    // Filtring order 
    const filteredProduct = computed(() =>
      orders.value.filter((order) => {
        const digital = order.digital ? "digital" : "standard";
        const nickName = order.nickName?.toString() || "";
        const orderId = order.orderId?.toString() || "";
        const query = searchQuery.value.toLowerCase();

        return (
          orderId.toLowerCase().includes(query) ||
          nickName.toLowerCase().includes(query) ||
          digital.toLowerCase().includes(query)
        );
      })
    );

    const setSearchQuery = (query) => {
      searchQuery.value = query.toLowerCase();
    };

    onMounted(fetchOrders);

    return {
      updateOrderStatus,
      setSearchQuery,
      deleteOrder,
      filteredProduct,
      orders,
    };
  },
};
</script>

<style scoped>
  .main-block {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
  }

  .orders-block {
    width: 90%;
    height: 80%;
    padding: 2.5%;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.150);
    border-radius: 8px;
    overflow-y: auto;
    scrollbar-width: 16px;
    scrollbar-color: rgb(158, 158, 158) white;
    scroll-behavior: smooth;
  }

  .container-btn {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
</style>
