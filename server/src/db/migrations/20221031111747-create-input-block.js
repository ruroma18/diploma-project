'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('input_blocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      posX: {
        allowNull: false,
        type: Sequelize.DOUBLE,
        field: 'pos_x'
      },
      posY: {
        allowNull: false,
        type: Sequelize.DOUBLE,
        field: 'pos_y'
      },
      height: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      width: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      taskId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'task_id',
        references: {
          model: 'tasks',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('input_blocks');
  }
};